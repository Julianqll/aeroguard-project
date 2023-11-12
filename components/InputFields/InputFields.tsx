import React, { useEffect, useState } from "react";
import { TextInput, Flex } from "@mantine/core";
import Selector from "../Selector/Selector";

interface InputFieldsProps {
  values: {
    valueNames: string;
    valueLastName: string;
    valueEmail: string;
    valueTelephone: string;
    valueDocumento: string;
    valueStreet: string;
    valueTipoDocumento: string | null;
  };
  setters: {
    setValueNames: React.Dispatch<React.SetStateAction<string>>;
    setValueLastName: React.Dispatch<React.SetStateAction<string>>;
    setValueEmail: React.Dispatch<React.SetStateAction<string>>;
    setValueTelephone: React.Dispatch<React.SetStateAction<string>>;
    setValueDocumento: React.Dispatch<React.SetStateAction<string>>;
    setValueStreet: React.Dispatch<React.SetStateAction<string>>;
    setValueTipoDocumento: React.Dispatch<React.SetStateAction<string | null>>;
  };
}

const InputFields: React.FC<InputFieldsProps> = ({ values, setters }) => {
  const [isDNIEnabled, setIsDNIEnabled] = useState(true);
  
  useEffect(() => {
    if (values.valueTipoDocumento == "DNI")
    {
      setIsDNIEnabled(true);
    }
    else if (values.valueTipoDocumento == "Carnet de Extranjeria")
    {
      setIsDNIEnabled(false);
    }
  }, [values.valueTipoDocumento]);



  return (
    <div>
      <Flex direction="column" align="center" style={{ gap: "20px" }}>
        <Flex mih={50} gap="xl" justify="center" align="flex-start" direction="row" wrap="wrap">
          <TextInput
            disabled={isDNIEnabled}
            label="Nombres"
            placeholder="Tus nombres"
            value={values.valueNames}
            onChange={(event) => setters.setValueNames(event.currentTarget.value)}
          />
          <TextInput
            disabled={isDNIEnabled}
            label="Apellidos"
            placeholder="Tus apellidos"
            value={values.valueLastName}
            onChange={(event) => setters.setValueLastName(event.currentTarget.value)}
          />
        </Flex>
        <Flex mih={50} gap="xl" justify="center" align="flex-start" direction="row" wrap="wrap">
          <TextInput
            label="Correo"
            placeholder="Tu correo"
            value={values.valueEmail}
            onChange={(event) => setters.setValueEmail(event.currentTarget.value)}
          />
          <TextInput
            label="Teléfono"
            placeholder="Tu teléfono"
            value={values.valueTelephone}
            onChange={(event) => setters.setValueTelephone(event.currentTarget.value)}
          />
        </Flex>
        <Flex mih={50} gap="xl" justify="center" align="flex-start" direction="row" wrap="wrap">
          <TextInput
            label="DNI"
            placeholder="Documento de identidad"
            value={values.valueDocumento}
            onChange={(event) => setters.setValueDocumento(event.currentTarget.value)}
          />
          <Selector type="tipoDocumento" value={values.valueTipoDocumento} setValue={setters.setValueTipoDocumento} />
          <TextInput
            label="Dirección"
            placeholder="Dirección de prueba"
            value={values.valueStreet}
            onChange={(event) => setters.setValueStreet(event.currentTarget.value)}
          />
        </Flex>
      </Flex>
    </div>
  );
}

export default InputFields;
