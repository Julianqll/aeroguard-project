import { gql } from '@apollo/client';

export const GET_AVION = gql`
query AvionQuery {
    avion {
      anoServicio
      diaFabricacion
      idAvion
      idFabricante
      numRegistro
      numSerie
      tipoCertificado
      vidaActual
      vidaLimite
    }
  }
  `;
  
  export const GET_AVION_QUERY_BY_ID = gql`
  query AvionQuery($_eq: Int) {
    avion(where: {idAvion: {_eq: $_eq}}) {
      anoServicio
      diaFabricacion
      idAvion
      numRegistro
      numSerie
      tipoCertificado
      vidaActual
      vidaLimite
      fabricante {
        idFabricante
        nombre
      }
    }
  }
  
  `;

  export const DELETE_AVION= gql`
  mutation DeleteAvion($_eq: Int) {
    delete_avion(where: {idAvion: {_eq: $_eq}}) {
      returning {
        idAvion
        anoServicio
      }
    }
  }
  `;

  export const INSERT_AVION = gql`
  mutation InsertAvion($object: avion_insert_input = {}) {
    insert_avion_one(object: $object) {
      idAvion
      anoServicio
      numSerie
      numRegistro
      diaFabricacion
      idFabricante
      tipoCertificado
      vidaActual
      vidaLimite
    }
  }  
`;

export const UPDATE_AVION = gql`
mutation UpdateAvion($idAvion: Int!) {
    update_avion_by_pk(pk_columns: {idAvion: $idAvion}) {
      idAvion
      anoServicio
      numRegistro
      numSerie
    }
  }
`;