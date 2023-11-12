import { gql } from '@apollo/client';

//gql - convertir query a string 
export const GET_ROLS = gql`
query RolQuery 
{
  rol {
    estado
    idRol
    nombre
  }
}
`;


export const DELETE_ROLS = gql`
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

export const INSERT_ROLS = gql`
mutation INSERT_ROL($object: rol_insert_input = {}) {
  insert_rol_one(object: $object) {
    idRol
    nombre
  }
}
`;