import { gql } from '@apollo/client';

export const GET_TIPOS_DIRECTIVA = gql`
query GetTiposDirectiva {
    tipoDirectiva {
      idTipoDir
      nombre
      descripcion
    }
  }  
`;

export const ADD_TIPO_DIRECTIVA = gql`
mutation AddTipoDirectiva($input: tipoDirectiva_insert_input!) {
    insert_tipoDirectiva_one(object: $input) {
    nombreTipoDirectiva
    descripTipoDirectiva
  }
}

`;