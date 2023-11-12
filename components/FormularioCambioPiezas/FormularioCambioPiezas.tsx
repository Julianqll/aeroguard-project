import React from 'react';
import { Fieldset, TextInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

export const FormularioCambioPiezas = () => {
  // You can use initialValues to set default values for the fields

  return (
    <Fieldset legend="Información Reporte Cambio Piezas">
      
      <TextInput label="Discrepancia" placeholder="Redacte la discrepancia" />

     
      <TextInput label="Accion correctiva" placeholder="Redacte la Accion correctiva" mt="md" />

      
      <TextInput label="ID-Estado-Cambio" placeholder="ID-Estado-Cambio" mt="md" />

      
      <TextInput label="ID-Pieza" placeholder="ID-Pieza" mt="md" />

      
      <TextInput label="Cantidad" placeholder="Ingrese la cantidad" mt="md" />

      
      {/* <DateTimePicker label ="Fecha" placeholder='Digite la fecha'></DateTimePicker> */}

      
      <TextInput label="ID-Asignacion-Avion" placeholder="ID-Asignacion-Avion" mt="md" />
    
    </Fieldset>
  );
};


