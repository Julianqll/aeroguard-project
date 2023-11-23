import { gql } from '@apollo/client';

export const GET_AVION_COMPONENTE = gql`
query AvionComponenteQuery {
    avionComponente {
      avion{
        numRegistro
      }
      idAvionComponente
      idComponente
    }
  }
  `;