"use client";
import React, { useEffect, useState } from "react";
import { TextInput, Button, Flex, Anchor, Text, Combobox, InputBase, useCombobox, Input } from "@mantine/core";
import { useMutation, useQuery } from "@apollo/client";
import { IconCheck, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { isValidDNI, isValidEmail, isValidPhone } from "../../../utils/validators";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { fetchPersonData } from "../../../external_apis/reniec";
import DirectivasInputFields from "../../../components/DirectivasInputFields/DirectivasInputFields";
import { ADD_TIPO_DIRECTIVA } from "../../../queries/tipoDirectivaQuery";

function TipoDirectivaPage() {
    const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }
    const [valueNombreDirectiva, setValueNombreDirectiva] = useState("");
    const [valueDescripcionDirectiva, setValueDescripcionDirectiva] = useState("");
    const [valueNames, setValueNames] = useState('');
    const [valueLastName, setValueLastName] = useState('');
    const [valueDocumento, setValueDocumento] = useState('');
    const [addTipoDirectiva, { data, loading, error }] = useMutation(ADD_TIPO_DIRECTIVA);

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
    if (!valueNombreDirectiva) {
        notifications.show({
            color: 'red',
            title: 'Completar el nombre de directiva',
            message: 'Por favor completa todos los campos',
            icon: <IconX size="1rem" />,
            autoClose: false
          });
    }
        else {

        const directiva = {
            nombreTipoDirectiva: valueNombreDirectiva,
            descripTipoDirectiva: valueDescripcionDirectiva,
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
      <Flex direction="column" align="center" style={{ gap: "20px" }}>
        <DirectivasInputFields
            values={{valueNombreDirectiva, valueDescripcionDirectiva}}
            setters={{setValueNombreDirectiva, setValueDescripcionDirectiva}}
        />
        <Button onClick={handleRegister}>Registrar directiva</Button>
      </Flex>
    </div>
  );
}

export default TipoDirectivaPage;
