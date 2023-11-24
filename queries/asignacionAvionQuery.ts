import { gql } from '@apollo/client';

export const INSERT_ASIGNACION = gql`
mutation MyMutationAsignacion($object: asignacionAvion_insert_input = {}) {
    insert_asignacionAvion_one(object: $object) {
      idAsignacionAvion
    }
  }
  `;
  