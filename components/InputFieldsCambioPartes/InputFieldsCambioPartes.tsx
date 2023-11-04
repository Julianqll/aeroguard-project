import React, { useEffect, useState } from "react";
import { TextInput, Flex, NumberInput } from "@mantine/core";
import { DateInput } from '@mantine/dates';

interface InputFieldsCambioPartesProps {
  values: {
    valueDiscrepancia: string;
    valueAccionCorrectiva: string;
    valueEstadoCambio: string;
    valueParte: string;
    valueCantidadParte: string | number;
    valueFecha: Date;
  };
  setters: {
    setValueDiscrepancia: React.Dispatch<React.SetStateAction<string>>;
    setValueAccionCorrectiva: React.Dispatch<React.SetStateAction<string>>;
    setValueEstadoCambio: React.Dispatch<React.SetStateAction<string>>;
    setValueParte: React.Dispatch<React.SetStateAction<string>>;
    setValueCantidadParte: React.Dispatch<React.SetStateAction<string | number>>;
    setValueFecha: React.Dispatch<React.SetStateAction<Date>>;
  };
}

const InputFieldsCambioPartes: React.FC<InputFieldsCambioPartesProps> = ({ values, setters }) => {
  //falta añadir estado, parte (selects)
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
                label="Discrepancia"
                placeholder="Complete con la discrepancia"
                value={values.valueDiscrepancia}
                onChange={(event) => setters.setValueDiscrepancia(event.currentTarget.value)}
            />
            <TextInput
                label="Acción Correctiva"
                placeholder="Complete con la acción correctiva"
                value={values.valueAccionCorrectiva}
                onChange={(event) => setters.setValueAccionCorrectiva(event.currentTarget.value)}
            />
        </Flex>
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <DateInput
            value={values.valueFecha}
            onChange={(event) => setters.setValueFecha(event!)}
            label="Fecha"
            placeholder="Seleccione la fecha"
            />
        </Flex>
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <NumberInput
                label="Cantidad de la parte"
                min={1}
                max={10}
                value={values.valueCantidadParte}
                onChange={(event) => setters.setValueCantidadParte(event)}
            />
        </Flex>
    </Flex>
  );
}

export default InputFieldsCambioPartes;
