import React, { useEffect, useState } from "react";
import { TextInput, Flex } from "@mantine/core";
import { DateInput } from '@mantine/dates';

interface InputFieldsDirectivasProps {
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

const InputFieldsDirectivas: React.FC<InputFieldsDirectivasProps> = ({ values, setters }) => {
  
  return (
    <Flex
        mt={20}
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
    >
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
                label="AD"
                placeholder="Complete con el AD"
                value={values.valueAdDirectiva}
                onChange={(event) => setters.setValueAdDirectiva(event.currentTarget.value)}
            />
            <TextInput
                label="Documento de referencia"
                placeholder="Complete con el documento"
                value={values.valueDocumentoRef}
                onChange={(event) => setters.setValueDocumentoRef(event.currentTarget.value)}
            />
            <TextInput
                label="AD Reemplazado"
                placeholder="Complete con el AD Reemplazado"
                value={values.valueAdReemp}
                onChange={(event) => setters.setValueAdReemp(event.currentTarget.value)}
            />
        </Flex>
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
                label="Derscripción de AD"
                placeholder="Complete con la descripción"
                value={values.valueAdDescrip}
                onChange={(event) => setters.setValueAdDescrip(event.currentTarget.value)}
            />
            <TextInput
                label="Documento de instrucción"
                placeholder="Complete con el documento"
                value={values.valueDocumInstruc}
                onChange={(event) => setters.setValueDocumInstruc(event.currentTarget.value)}
            />
        </Flex>
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
                label="Intervalo"
                placeholder="Complete con el intervalo"
                value={values.valueIntervalo}
                onChange={(event) => setters.setValueIntervalo(event.currentTarget.value)}
            />
            <DateInput
            value={values.valueFecha}
            onChange={(event) => setters.setValueFecha(event!)}
            label="Fecha"
            placeholder="Seleccione la fecha"
            />
        </Flex>
    </Flex>
  );
}

export default InputFieldsDirectivas;
