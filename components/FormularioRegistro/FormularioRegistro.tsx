"use client";
import React, { useEffect, useState } from "react";
import { Button, Flex} from "@mantine/core";
import { useMutation } from "@apollo/client";
import { IconCheck, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import bcrypt from "bcryptjs";
import { isValidDNI, isValidEmail, isValidPhone } from "../../utils/validators";
import { fetchPersonData } from "../../external_apis/reniec";
import { ADD_USER } from "../../queries/userQuery";
import InputFields from "../InputFields/InputFields";
import Selector from "../Selector/Selector";

function FormularioRegistro() {
    const [valueNames, setValueNames] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    const [valueDocumento, setValueDocumento] = useState('');
    const [valueStreet, setValueStreet] = useState('');
    const [valueEmail, setValueEmail] = useState('');
    const [valueTelephone, setValueTelephone] = useState('');
    const [valueRol, setValueRol] = useState<string | null>(null);
    const [valueTipoDocumento, setValueTipoDocumento] = useState<string | null>(null);
    const [addUser, { data, loading, error }] = useMutation(ADD_USER);

    useEffect(() => {
      if (isValidDNI(valueDocumento)) {
        const fetchData = async () => {
          const data = await fetchPersonData(valueDocumento);
          setValueNames(capitalize(data.nombres));
          setValueLastName(capitalize(data.apellidoPaterno + " " + data.apellidoMaterno));
        };
        fetchData();
      }
    }, [valueDocumento]);
    
    function capitalize(str:string) {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
  

  const handleRegister = async () => {
    if (!valueNames || !valueLastName || !valueDocumento || !valueStreet || !valueEmail || !valueTelephone || !valueRol || !valueTipoDocumento) {
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
        } else if (!isValidDNI(valueDocumento)) {
            notifications.show({
                color: 'red',
                title: 'Campo inválido',
                message: 'El DNI ingresado es inválido',
                icon: <IconX size="1rem" />,
                autoClose: false
              });    
        }
         else {
            //const randomPassword = generateRandomPassword();
            const randomPassword = "123456"
            const hashedPassword = await bcrypt.hash(randomPassword, 10);

            const user = {
              nombres: valueNames,
              apellidos: valueLastName,
              correo: valueEmail,
              contrasena: hashedPassword,
              direccion: valueStreet,
              telefono: valueTelephone,
              idRol: valueRol,
              numeroDocumento: valueDocumento,
              estado: true,
              tipoDocumento: valueTipoDocumento
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
              console.log(error);
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
          values={{ valueNames, valueLastName, valueEmail, valueTelephone, valueDocumento, valueStreet, valueTipoDocumento}}
          setters={{ setValueNames, setValueLastName, setValueEmail, setValueTelephone, setValueDocumento, setValueStreet, setValueTipoDocumento}}
        />
        <Selector type="rol" value={valueRol} setValue={setValueRol} />
        <Button onClick={handleRegister}>Registrar usuario</Button>
      </Flex>
    </div>
  );

}

export default FormularioRegistro;
