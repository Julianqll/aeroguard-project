import { gql } from '@apollo/client';
//Procedure Listar Usuarios
export const GET_USERS = gql`
  query GetUsers {
    usuario {
        usuarioId
        nombre
        apellido
      }
  }
`;

export const ADD_USER = gql`
mutation AddUser($input: usuario_insert_input!) {
  insert_usuario_one(object: $input) {
    nombre
    apellido
  }
}

`;

export const SIGNIN_USER = gql`
query Login($email: String!, $password: String) {
  usuario(where: {email: {_eq: $email}, contrasena: {_eq: $password}}) {
    nombre
    apellido
    email
  }
}
`;