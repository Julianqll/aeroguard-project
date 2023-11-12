import { gql } from '@apollo/client';

//gql - convertir query a string 
export const GET_ROL = gql`
query RolQuery 
{
  rol {
    estado
    idRol
    nombre
  }
}
`;

export const DELETE_ROL = gql`
mutation DeleteRol($_eq: Int) 
{
  delete_rol(where: {idRol: {_eq: $_eq}}) {
    returning {
      idRol
      nombre
    }
  }
}
`;

export const INSERT_ROL = gql`
mutation InsertRol($object: rol_insert_input = {}) {
  insert_rol_one(object: $object) {
    idRol
    nombre
  }
}
`;

export const UPDATE_ROL = gql`
mutation UpdateRol($idRol: Int!) {
  update_rol_by_pk(pk_columns: {idRol: $idRol}) {
    descripcion
    estado
    idRol
    nombre
  }
}
`;