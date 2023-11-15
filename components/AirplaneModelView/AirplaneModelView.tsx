// Reportes.js
"use client";
import { Container, Grid, Text } from '@mantine/core';
import classes from './AirplaneModelView.module.css';
import Scene from '../Airplane/Airplane';
import { TableSelection } from '../TableSelection/TableSelection';
import { TableReviews } from '../TableReviews/TableReviews';
import { ImageCard } from '../ImageCard/ImageCard';
import { GET_AVION_QUERY_BY_ID } from '../../queries/avionQuery';
import { useQuery } from '@apollo/client';

export default function AirplaneModelView({id} :any) {

    const { data, loading, error } = useQuery(GET_AVION_QUERY_BY_ID, {
        variables: { _eq:id },
    });
    if (loading) {
        return (<div>Cargando contenido...</div>)
    }
    console.log(data);

    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Avión Modelo {data?.avion[0].numRegistro}</Text>
            <Grid columns={12}>
                <Grid.Col span={4} mt={"90px"}>
                    <Container p={"30px"} h={"150px"}>
                        <Text>Datos del avión</Text>
                        <Text>Numero de serie: {data?.avion[0].numSerie}</Text>
                        <Text>Largo: {data?.avion[0].tipoCertificado}</Text>
                    </Container>
                </Grid.Col>
                <Grid.Col span={8}>
                    <div>
                        <Scene />
                    </div>
                </Grid.Col>
            </Grid>
            <div>
                <Text size="xl" className={classes.header}>Directivas registradas</Text>
                <Grid mb={30}>
                    <Grid.Col span={4}>
                        <ImageCard
                            image="https://upload.wikimedia.org/wikipedia/commons/c/c3/Hercules.propeller.arp.jpg"
                            title="Propeller"
                            description="Directivas del Propeller"
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                    <ImageCard
                            image="https://storage.googleapis.com/mcp_236blog/uploads/2018/12/Jet-engine-KLM-768x510.jpg"
                            title="Engine"
                            description="Directivas del Aircraft"
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                    <ImageCard
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Airbus_A400M_Atlas_%28ZM400%29_-_ASCOT482.jpg/1200px-Airbus_A400M_Atlas_%28ZM400%29_-_ASCOT482.jpg"
                            title="Aircraft"
                            description="Directivas del Aircraft"
                        />
                    </Grid.Col>
                </Grid>
                <Grid>
                    <Grid.Col span={4}>
                    <ImageCard
                            image="https://kellyaero.com/wp-content/uploads/2021/07/Factory-New-Aircraft-Magnetos-Kelly-Aero-Slick-Champion-OEM-Airplane-Engine-Replacement-Parts-202107.jpg"
                            title="Magneto"
                            description="Directivas del Magneto"
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>
                    <ImageCard
                            image="https://www.careerhunter.io/uploads/images/195/Airline-Pilot.jpg"
                            title="Appliance"
                            description="Directivas del Appliance"
                        />                    
                    </Grid.Col>
                </Grid>
            </div>
            <div>
                <Text mt={"30px"} size="xl" className={classes.header}>Últimas reportes registrados</Text>
                <TableReviews></TableReviews>
            </div>
        </div>
    );
}