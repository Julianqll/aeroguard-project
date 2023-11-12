import { gql } from '@apollo/client';

export const GET_REPORTE_INSPECCION= gql`
query ReporteInspeccionQuery {
    reporteInspeccion {
      accionCorrectiva
      discrepancia
      fechaInsp
      idAsignacionAvion
      idReporteInspeccion
      referencia
      idEstadoInsp
    }
  }  
`;

export const DELETE_REPORTE_INSPECCION= gql`
mutation DeleteReporteInspeccion($_eq: Int) {
    delete_reporteInspeccion(where: {idReporteInspeccion: {_eq: $_eq}}) {
      returning {
        idAsignacionAvion
        idEstadoInsp
        idReporteInspeccion
        fechaInsp
        accionCorrectiva
      }
    }
  }
`;

export const INSERT_REPORTE_INSPECCION = gql`
mutation InsertReporteInspeccion($object: reporteInspeccion_insert_input = {}) {
    insert_reporteInspeccion_one(object: $object) {
      idEstadoInsp
      idReporteInspeccion
      idAsignacionAvion
      fechaInsp
    }
`;

export const UPDATE_REPORTE_INSPECCION = gql`
mutation UpdateReporteInspeccion($idReporteInspeccion: Int!) {
    update_reporteInspeccion_by_pk(pk_columns: {idReporteInspeccion: $idReporteInspeccion}) {
      idEstadoInsp
      idAsignacionAvion
      idReporteInspeccion
    }
  }  
`;