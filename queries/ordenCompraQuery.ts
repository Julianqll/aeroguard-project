import { gql } from '@apollo/client';

export const GET_ORDEN_COMPRA = gql`
query OrdenCompraQuery {
    ordenCompra {
      descripcion
      fechaRecepcion
      idEstadoCompra
      idOrdenCompra
      idProveedor
    }
  }  
  `;
  
export const DELETE_ORDEN_COMPRA = gql`
  mutation DeleteOrdenCompra($_eq: Int) {
    delete_ordenCompra(where: {idOrdenCompra: {_eq: $_eq}}) {
      returning {
        idOrdenCompra
        descripcion
        fechaRecepcion
      }
    }
  }
  `;

  export const INSERT_ORDEN_COMPRA = gql`
  mutation InsertOrdenCompra($object: ordenCompra_insert_input = {}) {
    insert_ordenCompra_one(object: $object) {
      descripcion
      fechaRecepcion
      idOrdenCompra
    }
  }
`;

export const UPDATE_ORDEN_COMPRA = gql`
mutation UpdateOrdenCompra($idOrdenCompra: Int!) {
    update_ordenCompra_by_pk(pk_columns: {idOrdenCompra: $idOrdenCompra}) {
      descripcion
      idOrdenCompra
      fechaRecepcion
    }
  }
`;