import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    usuario {
        usuarioId
        nombres
        apellidos
      }
  }
`;

export const ADD_USER = gql`
mutation AddUser($input: usuario_insert_input!) {
  insert_usuario_one(object: $input) {
    nombres
    apellidos
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