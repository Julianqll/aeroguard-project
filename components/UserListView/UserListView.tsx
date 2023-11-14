// Reportes.js
"use client";
import { Text } from '@mantine/core';
import classes from './UserListView.module.css';
import { TableSelection } from '../TableSelection/TableSelection';
import { useQuery } from '@apollo/client';
import { GET_USUARIO } from '../../queries/usuarioQuery';
import { GET_AVION } from '../../queries/avionQuery';
import { GET_REPORTE_CAMBIO_PIEZAS } from '../../queries/reporteCambioPiezasQuery';
import { GET_REPORTE_INSPECCION } from '../../queries/reporteInspeccionQuery';

export default function UserListView({type}: any) {
    let query_type;
    let title;
    if (type === 'aviones')
    {       
        query_type = GET_AVION;
        title = "Aviones";

    }
    else if (type === 'usuarios')
    {
        query_type = GET_USUARIO;
        title = "Usuarios";
    }
    else if (type === 'reportes_inspecciones')
    {
        query_type = GET_REPORTE_INSPECCION;
        title = "Reportes de Inspecciones";
    }
    else if (type === 'reportes_cambios')
    {
        query_type = GET_REPORTE_CAMBIO_PIEZAS;
        title = "Reportes de Cambios de Piezas";
    }
    const { data, loading, error } = useQuery(query_type!);
    if (loading)
    {
        return (<div>Cargando contenido</div>)
    }

    return (
        <div className={classes.container}>
            <div>
                <Text size="xl" className={classes.header}>{title} registrados</Text>
                <TableSelection type={type} data={data}></TableSelection>
            </div>
        </div>
    );
}
