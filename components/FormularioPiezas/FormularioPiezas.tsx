

import React from 'react';
import PropTypes from 'prop-types';
import { Fieldset, TextInput } from '@mantine/core';

export const FormularioPiezas = () => {
  // You can use initialValues to set default values for the fields

  return (
    <Fieldset legend="Información Pieza">
      {/* Nombre */}
      <TextInput label="Nombre" placeholder="Ingrese el nombre" />

      {/* Material */}
      <TextInput label="Material" placeholder="Material" mt="md" />

      {/* ID del Fabricante */}
      <TextInput label="ID del Fabricante" placeholder="ID del Fabricante" mt="md" />

      {/* Código de Referencia */}
      <TextInput label="Código de Referencia" placeholder="Código de Referencia" mt="md" />

      {/* Descripción */}
      <TextInput label="Descripción" placeholder="Ingrese la descripción" mt="md" />

      {/* Stock */}
      <TextInput label="Stock" placeholder="Ingrese el stock" mt="md" />

      {/* Backorder */}
      <TextInput label="Backorder" placeholder="Ingrese el backorder" mt="md" />
    </Fieldset>
  );
};

FormularioPiezas.propTypes = {
  initialValues: PropTypes.shape({
    nombre: PropTypes.string,
    material: PropTypes.string,
    idFabricante: PropTypes.string,
    codigoReferencia: PropTypes.string,
    descripcion: PropTypes.string,
    stock: PropTypes.string,
    backorder: PropTypes.string,
  }),
};






