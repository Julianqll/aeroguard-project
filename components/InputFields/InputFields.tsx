import React from "react";
import { TextInput, Flex } from "@mantine/core";

interface InputFieldsProps {
  values: {
    valueNames: string;
    valueLastName: string;
    valueEmail: string;
    valueTelephone: string;
    valueDNI: string;
    valueStreet: string;
  };
  setters: {
    setValueNames: React.Dispatch<React.SetStateAction<string>>;
    setValueLastName: React.Dispatch<React.SetStateAction<string>>;
    setValueEmail: React.Dispatch<React.SetStateAction<string>>;
    setValueTelephone: React.Dispatch<React.SetStateAction<string>>;
    setValueDNI: React.Dispatch<React.SetStateAction<string>>;
    setValueStreet: React.Dispatch<React.SetStateAction<string>>;
  };
}

const InputFields: React.FC<InputFieldsProps> = ({ values, setters }) => {
  return (
    <div>
      <Flex direction="column" align="center" style={{ gap: "20px" }}>
        <Flex mih={50} gap="xl" justify="center" align="flex-start" direction="row" wrap="wrap">
          <TextInput
            label="Nombres"
            placeholder="Tus nombres"
            value={values.valueNames}
            onChange={(event) => setters.setValueNames(event.currentTarget.value)}
          />
          <TextInput
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
            value={values.valueDNI}
            onChange={(event) => setters.setValueDNI(event.currentTarget.value)}
          />
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
