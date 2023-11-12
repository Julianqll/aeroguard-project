import { gql } from '@apollo/client';

export const GET_PIEZA = gql`
query PiezaQuery {
    pieza {
      nombre
      idPieza
      material
      idFabricante
      codigoReferencia
      backorder
      descripcion
      stock
    }
  }
`;

export const DELETE_PIEZA= gql`
mutation DeletePieza($_eq: Int) {
    delete_pieza(where: {idPieza: {_eq: $_eq}}) {
      returning {
        idPieza
        nombre
        descripcion
      }
    }
  }
`;

export const INSERT_PIEZA = gql`
mutation InsertPieza($object: pieza_insert_input = {}) {
    insert_pieza_one(object: $object) {
      idPieza
      nombre
      stock
      descripcion
    }
  }
`;

export const UPDATE_PIEZA = gql`
mutation UpdatePieza($idPieza: Int!) {
    update_pieza_by_pk(pk_columns: {idPieza: $idPieza}) {
      descripcion
      idPieza
      nombre
      stock
    }
  }  
`;