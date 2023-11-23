import { gql } from '@apollo/client';

export const GET_COMPONENTE_PIEZA = gql`
query ComponentPiezaQuery($_eq: Int, $limit: Int) {
    componentePieza(where: {idComponente: {_eq: $_eq}}, limit: $limit) {
      idPieza
    }
  }
  `;