import { gql } from '@apollo/client';

export const GET_USUARIO = gql`
query UsuarioQuery {
    usuario {
      apellidos
      contrasena
      correo
      direccion
      estado
      idRol
      idUsuario
      nombres
      numeroDocumento
      telefono
      tipoDocumento
    }
  }
`;

export const DELETE_USUARIO= gql`
mutation DeleteUsuario($_eq: Int) {
    delete_usuario(where: {idRol: {_eq: $_eq}}) {
      returning {
        idUsuario
        apellidos
        nombres
        idRol
        numeroDocumento
      }
    }
  }
`;

export const INSERT_USUARIO = gql`
mutation InsertUsuario($object: usuario_insert_input = {}) {
    insert_usuario_one(object: $object) {
      apellidos
      idUsuario
      nombres
      idRol
    }
  }
`;

export const UPDATE_USUARIO = gql`
mutation UpdateUsuario($idUsuario: Int!) {
    update_usuario_by_pk(pk_columns: {idUsuario: $idUsuario}) {
      idUsuario
      idRol
      nombres
      apellidos
      correo
    }
  }
`;

export const SIGNIN_USER = gql`
query Login($email: String!) {
  usuario(where: {correo: {_eq: $email}}) {
    nombres
    apellidos
    correo
    contrasena
    idRol
  }
}
`;