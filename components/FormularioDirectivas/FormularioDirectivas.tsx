"use client";
import React, { useEffect, useState } from "react";
import { TextInput, Button, Flex, Anchor, Text, Combobox, InputBase, useCombobox, Input } from "@mantine/core";
import { useMutation, useQuery } from "@apollo/client";
import { IconCheck, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ADD_TIPO_DIRECTIVA } from "../../queries/tipoDirectivaQuery";
import { isValidDNI } from "../../utils/validators";
import { fetchPersonData } from "../../external_apis/reniec";
import InputFieldsDirectivas from "../InputFieldDirectivas/InputFieldDirectivas";

function FormularioDirectivas() {
    const [valueAdDirectiva, setValueAdDirectiva] = useState<string>("");
    const [valueDocumentoRef, setValueDocumentoRef] = useState<string>("");
    const [valueAdReemp, setValueAdReemp] = useState<string>("");
    const [valueAdDescrip, setValueAdDescrip] = useState<string>("");
    const [valueDocumInstruc, setValueDocumInstruc] = useState<string>("");
    const [valueIntervalo, setValueIntervalo] = useState<string>("");
    const [valueFecha, setValueFecha] = useState<Date>(new Date());
    const [valueNames, setValueNames] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    const [addTipoDirectiva, { data, loading, error }] = useMutation(ADD_TIPO_DIRECTIVA);
  

  const handleRegister = async () => {
    if (!valueAdDirectiva || !valueDocumentoRef || !valueAdReemp || !valueAdDescrip || !valueDocumInstruc || !valueIntervalo || !valueFecha) {
        notifications.show({
            color: 'red',
            title: 'Completar todos los campos',
            message: 'Por favor completa todos los campos',
            icon: <IconX size="1rem" />,
            autoClose: false
          });
    }
        else {

        const directiva = {
            //nombreTipoDirectiva: valueNombreDirectiva,
            //descripTipoDirectiva: valueDescripcionDirectiva,
        };
    
        try {
            const response = await addTipoDirectiva({ variables: { input: directiva } });
            notifications.show({
            color: 'green',
            title: 'Tipo Directiva Registrada',
            message: <>
            La directiva {response.data.insert_tipoDirectiva_one.nombreTipoDirectiva} se registró con éxito
            </>,
            icon: <IconCheck size="1rem" />,
            autoClose: false
            });
        } catch (error) {
            console.log(error);
            notifications.show({
                color: 'red',
                title: 'Error en el registro',
                message: 'Hubo un error registrando la directiva',
                icon: <IconX size="1rem" />,
                autoClose: false
                });
        }    
    }
  };

  

  return (
    <div>
      <Flex mt={50} direction="column" align="center" style={{ gap: "30px" }}>
        <Text
            size="xl"
            fw={500}
        >
            Formulario de Directivas
        </Text>
        <InputFieldsDirectivas
            values={{valueAdDirectiva, valueDocumentoRef, valueAdReemp, valueAdDescrip, valueDocumInstruc, valueIntervalo, valueFecha}}
            setters={{setValueAdDirectiva, setValueDocumentoRef, setValueAdReemp, setValueAdDescrip, setValueDocumInstruc, setValueIntervalo, setValueFecha}}
        />
        <Button onClick={handleRegister}>Registrar nueva directiva</Button>
      </Flex>
    </div>
  );
}

export default FormularioDirectivas;
