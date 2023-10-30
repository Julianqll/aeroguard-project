import { gql } from '@apollo/client';

export const GET_TIPOS_DOCUMENTO = gql`
  query GetTiposDocumento {
    tipoDocumento {
        idTipoDocumento
        tipoDocumento
      }
  }
`;