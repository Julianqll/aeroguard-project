import { gql } from '@apollo/client';

export const GET_ROLS = gql`
  query GetRols {
    rol {
        nombre
        rolId
      }
  }
`;