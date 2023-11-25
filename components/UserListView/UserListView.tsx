// Reportes.js
"use client";
import { Button, Text } from '@mantine/core';
import classes from './UserListView.module.css';
import { TableSelection } from '../TableSelection/TableSelection';
import { useQuery } from '@apollo/client';
import { GET_USUARIO } from '../../queries/usuarioQuery';
import { GET_AVION, GET_AVION_TECNICO } from '../../queries/avionQuery';
import { GET_REPORTE_CAMBIO_PIEZAS } from '../../queries/reporteCambioPiezasQuery';
import { GET_REPORTE_INSPECCION } from '../../queries/reporteInspeccionQuery';
import { QUERY_FORMULARIO, QUERY_FORMULARIO_TECNICO } from '../../queries/formularioQuery';
import { useSession } from 'next-auth/react';
import { QUERY_AIRCRAFT, QUERY_APPLIANCE, QUERY_ENGINE, QUERY_MAGNETO, QUERY_PROPELLER } from '../../queries/directivaQuery';
import { IconFileInfo } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { GET_ORDEN_COMPRA } from '../../queries/ordenCompraQuery';

export default function UserListView({type}: any) {
    const router = useRouter();

    const {data : session} = useSession();
    let query_type;
    let title;
    let variables = false;
    if (type === 'aviones')
    {       
        query_type = GET_AVION;
        title = "Aviones";

    }
    else if (type === 'propeller')
    {       
        query_type = QUERY_PROPELLER;
        title = "Directivas - Propeller";

    }
    else if (type === 'engine')
    {       
        query_type = QUERY_ENGINE;
        title = "Directivas - Engine";

    }
    else if (type === 'aircraft')
    {       
        query_type = QUERY_AIRCRAFT;
        title = "Directivas - Aircraft";

    }
    else if (type === 'magneto')
    {       
        query_type = QUERY_MAGNETO;
        title = "Directivas - Magneto";

    }
    else if (type === 'appliance')
    {       
        query_type = QUERY_APPLIANCE;
        title = "Directivas - Appliance";

    }
    else if (type === 'aviones_por_tecnico')
    {       
        query_type = GET_AVION_TECNICO;
        title = "Aviones asignados";
        variables = true;

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
    else if (type === 'solicitudes')
    {
        query_type = GET_ORDEN_COMPRA;
        title = "Ordenes de Compra";
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
                {type === "usuarios"?
                                <Button 
                                ml={15} 
                                rightSection={<IconFileInfo size={14} />} 
                                onClick={() => router.push(`/registro`)}
                                >
                                Registrar Usuario
                                </Button>
                :
                null}
                <TableSelection type={type} data={data}></TableSelection>
            </div>
        </div>
    );
}
