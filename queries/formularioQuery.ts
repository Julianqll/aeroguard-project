import { gql } from '@apollo/client';

export const INSERT_FORMULARIO_ONE= gql`
mutation MyMutation($object: formulario_insert_input = {}) {
    insert_formulario_one(object: $object) {
      idFormulario
    }
  }
  `;