// Reportes.js
"use client";
import { Button, Container, Grid, Text } from '@mantine/core';
import classes from './FormularioView.module.css';
import { useQuery } from '@apollo/client';
import { QUERY_FORMULARIO_BY_ID } from '../../queries/formularioQuery';
import { IconFileInfo } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function FormularioView({id} :any) {
    const router = useRouter();

    const { data, loading, error } = useQuery(QUERY_FORMULARIO_BY_ID, {
        variables: { idFormulario:id },
    });
    if (loading) {
        return (<div>Cargando contenido...</div>)
    }
    console.log(data);

    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Formulario Inicial Recibido</Text>
            <Grid columns={12}>
                <Grid.Col span={8} mt={"90px"}>
                    <Container p={"30px"} h={"150px"}>
                        <Text>Datos del avión</Text>
                        <Text>Nombre: {data?.formulario_by_pk.nombre}</Text>
                        <Text>Tipo Formulario: {data?.formulario_by_pk.tipoFormulario.tipoFormulario}</Text>
                        <Text>Avion: {data?.formulario_by_pk.idAvion}</Text>
                        <Button 
                            mt={25} 
                            rightSection={<IconFileInfo size={14} />} 
                            onClick={() => router.push(`/avion/${data?.formulario_by_pk.idAvion}`)}
                            >
                                Asignar avión
                        </Button>
                    </Container>
                </Grid.Col>
                <Grid.Col span={4} mt={"90px"}>
                    <Container p={"30px"} h={"200px"}>
                        <Text>Diagnostico: {data?.formulario_by_pk.diagnostico.componentePieza[0].idPieza}</Text>
                    </Container>                   
                </Grid.Col>
            </Grid>
        </div>
    );
}