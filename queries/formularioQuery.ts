import { gql } from '@apollo/client';

export const INSERT_FORMULARIO_ONE= gql`
mutation MyMutation($object: formulario_insert_input = {}) {
    insert_formulario_one(object: $object) {
      idFormulario
    }
  }
  `;

export const QUERY_FORMULARIO = gql`
query MyQuery2 {
    formulario {
      idFormulario
      tipoFormulario{
        idTipoFormulario
        tipoFormulario
      }
      nombre
      idAvion
    }
  }
  
`;

export const QUERY_FORMULARIO_BY_ID = gql`
query MyQuery3($idFormulario: Int!) {
  formulario_by_pk(idFormulario: $idFormulario) {
    diagnostico
    idAvion
    idFormulario
    tipoFormulario{
      tipoFormulario
    }
    nombre
  }
}
`;

export const QUERY_FORMULARIO_BY_AVION = gql`
query MyQueryAvion($_eq: Int) {
  formulario(where: {idAvion: {_eq: $_eq}, estado: {_neq: "Pendiente"}}) {
    idFormulario
    nombre
    tipoFormulario {
      tipoFormulario
    }
    estado
    diagnostico
  }
}
`;

export const QUERY_FORMULARIO_BY_AVION_PENDIENTE = gql`
query MyQueryAvion($_eq: Int) {
  formulario(where: {idAvion: {_eq: $_eq}, estado: {_eq: "Pendiente"}}) {
    idFormulario
    nombre
    tipoFormulario {
      tipoFormulario
    }
    estado
    diagnostico
  }
}
`;


export const QUERY_FORMULARIO_TECNICO = gql`
query formularioxtenico($_eq: Int) {
  formulario(where: {avion: {asignacionAvions: {idUsuario: {_eq: $_eq}}}}) {
    idFormulario
    tipoFormulario {
      tipoFormulario
    }
    nombre
    idAvion
  }
}
  
`;