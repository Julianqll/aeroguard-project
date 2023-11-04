import React, { useEffect, useState } from "react";
import { TextInput, Flex } from "@mantine/core";
import TipoDocumentoSelector from "../TipoDocumentoSelector/TipoDocumentoSelector";

interface InputFieldsTiposDirectivasProps {
  values: {
    valueNombreDirectiva: string;
    valueDescripcionDirectiva: string;
  };
  setters: {
    setValueNombreDirectiva: React.Dispatch<React.SetStateAction<string>>;
    setValueDescripcionDirectiva: React.Dispatch<React.SetStateAction<string>>;
  };
}

const InputFieldsTiposDirectivas: React.FC<InputFieldsTiposDirectivasProps> = ({ values, setters }) => {
  
  return (
    <div>
        <Flex
            gap="xl"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
        >
            <TextInput
                label="Nombre de directiva"
                placeholder="Directiva..."
                value={values.valueNombreDirectiva}
                onChange={(event) => setters.setValueNombreDirectiva(event.currentTarget.value)}
            />
            <TextInput
                label="Descripción de la directiva"
                placeholder="Descripción..."
                value={values.valueDescripcionDirectiva}
                onChange={(event) => setters.setValueDescripcionDirectiva(event.currentTarget.value)}
            />
        </Flex>
    </div>
  );
}

export default InputFieldsTiposDirectivas;
