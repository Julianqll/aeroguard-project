"use client";
import React, { useState } from "react";
import { TextInput, Button, Flex, Anchor, Text, Combobox, InputBase, useCombobox, Input } from "@mantine/core";
import { Notification, rem } from '@mantine/core';
import bcrypt from "bcryptjs";
import { useMutation, useQuery } from "@apollo/client";
import { IconCheck, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { ADD_USER } from "../../../queries/userQuery";
import InputFields from "../../../components/InputFields/InputFields";
import RolSelector from "../../../components/RolSelector/RolSelector";
import { generateRandomPassword } from "../../../utils/utils";
import { isValidDNI, isValidEmail, isValidPhone } from "../../../utils/validators";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function RegistroPage() {
    const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }
    const [valueNames, setValueNames] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    const [valueDNI, setValueDNI] = useState('');
    const [valueStreet, setValueStreet] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueTelephone, setValueTelephone] = useState('');
    const [valueRol, setValueRol] = useState<string | null>(null);
    const [addUser, { data, loading, error }] = useMutation(ADD_USER);


  const handleRegister = async () => {
    if (!valueNames || !valueLastName || !valueDNI || !valueStreet || !valueEmail || !valueTelephone || !valueRol) {
        notifications.show({
            color: 'red',
            title: 'Completar campos',
            message: 'Por favor completa todos los campos',
            icon: <IconX size="1rem" />,
            autoClose: false
          });
    } else if (!isValidEmail(valueEmail)) {
        notifications.show({
            color: 'red',
            title: 'Campo inválido',
            message: 'El correo electrónico ingresado es inválido',
            icon: <IconX size="1rem" />,
            autoClose: false
          });
    } else if (!isValidPhone(valueTelephone)) {
        notifications.show({
            color: 'red',
            title: 'Campo inválido',
            message: 'El número de teléfono ingresado es inválido',
            icon: <IconX size="1rem" />,
            autoClose: false
          });
        } else if (!isValidDNI(valueDNI)) {
            notifications.show({
                color: 'red',
                title: 'Campo inválido',
                message: 'El DNI ingresado es inválido',
                icon: <IconX size="1rem" />,
                autoClose: false
              });    
        }
         else {
            const randomPassword = generateRandomPassword();
            const hashedPassword = await bcrypt.hash(randomPassword, 10);

            let valueRolFinal;
            if (valueRol === "Administrador")
            {
                valueRolFinal = 1;
            }
            else if (valueRol === "Técnico")
            {
                valueRolFinal = 2;
            }
            else if (valueRol === "Gestor Logístico")
            {
                valueRolFinal = 3;
            }
            const user = {
              nombres: valueNames,
              apellidos: valueLastName,
              correo: valueEmail,
              contrasena: hashedPassword,
              direccion: valueStreet,
              telefono: valueTelephone,
              rolId: valueRolFinal,
              dni: valueDNI,
              estado: true,
            };
        
            try {
              const response = await addUser({ variables: { input: user } });
              notifications.show({
                color: 'green',
                title: 'Usuario Registrado',
                message: <>
                El Usuario {response.data.insert_usuario_one.nombres} {response.data.insert_usuario_one.apellidos}, se registró con éxito
                </>,
                icon: <IconCheck size="1rem" />,
                autoClose: false
              });
            } catch (error) {
                notifications.show({
                    color: 'red',
                    title: 'Error en el registro',
                    message: 'Hubo un error registrando al usuario',
                    icon: <IconX size="1rem" />,
                    autoClose: false
                  });
            }    
        }
  };

  return (
    <div>
      <Flex direction="column" align="center" style={{ gap: "20px" }}>
        <InputFields 
          values={{ valueNames, valueLastName, valueEmail, valueTelephone, valueDNI, valueStreet }}
          setters={{ setValueNames, setValueLastName, setValueEmail, setValueTelephone, setValueDNI, setValueStreet }}
        />
        <RolSelector value={valueRol} setValue={setValueRol} />
        <Button onClick={handleRegister}>Registrar usuario</Button>
      </Flex>
    </div>
  );
}

export default RegistroPage;
