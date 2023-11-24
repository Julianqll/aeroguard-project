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
import { QUERY_FORMULARIO, QUERY_FORMULARIO_TECNICO } from '../../queries/formularioQuery';
import { useSession } from 'next-auth/react';

export default function UserListView({type}: any) {
    const {data : session} = useSession();

    let query_type;
    let title;
    let variables = false;
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
    else if (type === 'formularios')
    {
        query_type = QUERY_FORMULARIO;
        title = "Formularios recibidos"
    }
    else if (type === 'formularios_por_tecnico')
    {
        query_type = QUERY_FORMULARIO_TECNICO;
        title = "Formularios asignados";
        variables = true;
    }
    const { data, loading, error } = variables ?
    useQuery(query_type!, {
        variables: { _eq: session?.user.id},
    })
     : useQuery(query_type!);
    if (loading)
    {
        return (<div>Cargando contenido</div>)
    }
    console.log(session?.user.id);


    return (
        <div className={classes.container}>
            <div>
                <Text size="xl" className={classes.header}>{title} registrados</Text>
                <TableSelection type={type} data={data}></TableSelection>
            </div>
        </div>
    );
}
