import React from 'react';
import PropTypes from 'prop-types';
import { Button, Fieldset, TextInput } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';

export const FormularioInspeccion = () => {
  // You can use initialValues to set default values for the fields

  return (
    <Fieldset legend="Reporte de Inspeccion">
      
      <TextInput label="Discrepancia" placeholder="Redacte la discrepancia" />
      
      <TextInput label="Accion correctiva" placeholder="Redacte la Accion correctiva" mt="md" />
      
      <TextInput label="ID-Estado-Inspeccion" placeholder="ID-Estado-Inspeccion" mt="md" />
  
      <TextInput label="Referencia" placeholder="Referencia" mt="md" />

      {/* <DateTimePicker label ="Fecha Inspeccion" placeholder='Digite la fecha'></DateTimePicker> */}
     
      <TextInput label="Descripción" placeholder="Ingrese la descripción" mt="md" />

      <TextInput label="Id-Asignacion" placeholder="ID-Asignación" mt="md" /><br/>
        
    <Button variant="filled">Registrar</Button> 
    </Fieldset>
  );
};

