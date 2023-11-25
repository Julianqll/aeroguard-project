import { gql } from '@apollo/client';
 
export const GET_DIRECTIVA = gql`
query DirectivaQuery {
    directiva {
      ad
      adDescrip
      adRemp
      documentoRef
      fechaDirectiva
      idAsignacionAvion
      idDirectiva
      idEstadoDir
      idIntervaloDir
      idTipoDir
    }
  }  
`;

export const DELETE_DIRECTIVA = gql`
mutation DeleteDirectiva($_eq: Int) {
    delete_directiva(where: {idDirectiva: {_eq: $_eq}}) {
      returning {
        idDirectiva
        idAsignacionAvion
        fechaDirectiva
        documentoRef
        idEstadoDir
        idTipoDir
        adDescrip
      }
    }
  }  
`;

export const INSERT_DIRECTIVA = gql`
mutation InsertDirectiva ($object: directiva_insert_input = {}) {
    insert_directiva_one(object: $object) {
      idDirectiva
      idEstadoDir
      fechaDirectiva
      adDescrip
      idTipoDir
      idAsignacionAvion
    }
  }
`;

export const UPDATE_DIRECTIVA = gql`
mutation UpdateDirectiva($idDirectiva: Int!) {
    update_directiva_by_pk(pk_columns: {idDirectiva: $idDirectiva}) {
      idTipoDir
      idEstadoDir
      idDirectiva
      adDescrip
      idAsignacionAvion
      fechaDirectiva
    }
  }
`;

export const QUERY_PROPELLER = gql`
query MyQuerypropeller {
  directiva(where: {idTipoDir: {_eq: 1}}) {
    ad
    docInstruc
    documentoRef
    fechaDirectiva
  }
}
`;

export const QUERY_ENGINE= gql`
query MyQuerypropeller {
  directiva(where: {idTipoDir: {_eq: 2}}) {
    ad
    docInstruc
    documentoRef
    fechaDirectiva
  }
}
`;

export const QUERY_AIRCRAFT= gql`
query MyQuerypropeller {
  directiva(where: {idTipoDir: {_eq: 3}}) {
    ad
    docInstruc
    documentoRef
    fechaDirectiva
  }
}
`;

export const QUERY_MAGNETO= gql`
query MyQuerypropeller {
  directiva(where: {idTipoDir: {_eq: 4}}) {
    idDirectiva
    ad
    docInstruc
    documentoRef
    fechaDirectiva
  }
}
`;


export const QUERY_APPLIANCE= gql`
query MyQuerypropeller {
  directiva(where: {idTipoDir: {_eq: 5}}) {
    ad
    docInstruc
    documentoRef
    fechaDirectiva
  }
}
`;