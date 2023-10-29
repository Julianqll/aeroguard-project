// Reportes.js
"use client";
import { Container, Grid, Text } from '@mantine/core';
import classes from './AirplaneModelView.module.css';
import Scene from '../Airplane/Airplane';
import { TableSelection } from '../TableSelection/TableSelection';
import { TableReviews } from '../TableReviews/TableReviews';
import { ImageCard } from '../ImageCard/ImageCard';

export default function AirplaneModelView() {
    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Avión Modelo XXXXX</Text>
            <Grid columns={12}>
                <Grid.Col span={4} mt={"90px"}>
                    <Container p={"30px"} h={"150px"} bg="var(--mantine-color-blue-light)">
                        <Text>Datos del avión</Text>
                        <Text>Ancho: </Text>
                        <Text>Largo: </Text>
                    </Container>
                </Grid.Col>
                <Grid.Col span={8}>
                    <div>
                        <Scene />
                    </div>
                </Grid.Col>
            </Grid>
            <div>
                <Text size="xl" className={classes.header}>Directivas</Text>
                <Grid>
                    <Grid.Col span={4}>
                        <ImageCard></ImageCard>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <ImageCard></ImageCard>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <ImageCard></ImageCard>
                    </Grid.Col>
                </Grid>
            </div>
            <div>
                <Text mt={"30px"} size="xl" className={classes.header}>Últimas revisiones</Text>
                <TableReviews></TableReviews>
            </div>
        </div>
    );
}