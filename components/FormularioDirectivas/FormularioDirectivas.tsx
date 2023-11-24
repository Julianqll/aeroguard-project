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

interface FormularioDirectivasProps {
  nombre: string;
  values: {
    valueAdDirectiva: string;
    valueDocumentoRef: string;
    valueAdReemp: string;
    valueAdDescrip: string;
    valueDocumInstruc: string;
    valueIntervalo: string;
    valueFecha: Date;
  };
  setters: {
    setValueAdDirectiva: React.Dispatch<React.SetStateAction<string>>;
    setValueDocumentoRef: React.Dispatch<React.SetStateAction<string>>;
    setValueAdReemp: React.Dispatch<React.SetStateAction<string>>;
    setValueAdDescrip: React.Dispatch<React.SetStateAction<string>>;
    setValueDocumInstruc: React.Dispatch<React.SetStateAction<string>>;
    setValueIntervalo: React.Dispatch<React.SetStateAction<string>>;
    setValueFecha: React.Dispatch<React.SetStateAction<Date>>;
  };
}

const FormularioDirectivas: React.FC<FormularioDirectivasProps> = ({ nombre, values, setters }) => {
  return (
    <div>
      <Flex mt={50} direction="column" align="center" style={{ gap: "30px" }}>
        <Text
            size="xl"
            fw={500}
        >
            Formulario de Directiva - {nombre}
        </Text>
        <InputFieldsDirectivas
            values={values}
            setters={setters}
        />
      </Flex>
    </div>
  );
}

export default FormularioDirectivas;
