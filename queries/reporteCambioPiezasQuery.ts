import { gql } from '@apollo/client';

export const GET_REPORTE_CAMBIO_PIEZAS = gql`
query ReporteCambioPiezasQuery {
    reporteCambioPiezas {
      accionCorrectiva
      cantidad
      discrepancia
      fechaCambio
      idAsignacionAvion
      idEstadoCambio
      idPieza
      idReporteCamP
    }
  }  
  `;
  
  export const DELETE_REPORTE_CAMBIO_PIEZAS = gql`
  mutation DeleteReporteCambioPiezas($_eq: Int) {
    delete_reporteCambioPiezas(where: {idReporteCamP: {_eq: $_eq}}) {
      returning {
        idPieza
        idReporteCamP
        idAsignacionAvion
        cantidad
      }
    }
  }  
  `;

  export const INSERT_REPORTE_CAMBIO_PIEZAS = gql`
  mutation InsertReporteCambioPiezas($object: reporteCambioPiezas_insert_input = {}) {
    insert_reporteCambioPiezas_one(object: $object) {
      cantidad
      idPieza
      idReporteCamP
      idAsignacionAvion
      fechaCambio
    }
  }
`;

export const UPDATE_REPORTE_CAMBIO_PIEZAS = gql`
mutation UpdateReporteCambioPiezas($idReporteCamP: Int!) {
    update_reporteCambioPiezas_by_pk(pk_columns: {idReporteCamP: $idReporteCamP}) {
      cantidad
      idPieza
      idReporteCamP
      idAsignacionAvion
      fechaCambio
    }
  }
`;