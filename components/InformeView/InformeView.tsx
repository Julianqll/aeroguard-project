// Reportes.js
"use client";
import { Grid, Text } from '@mantine/core';
import classes from './InformeView.module.css';
import Scene from '../Airplane/Airplane';
import { StatsCard } from '../StatsCard/StatsCard';
import { StatsGrid } from '../StatsGrid/StatsGrid';

export default function InformeView() {
    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Informe Inicial del Avión Modelo XXXXX</Text>
            <Grid columns={12}>
                <Grid.Col span={4} mt={"90px"}>
                    <StatsCard></StatsCard>
                </Grid.Col>
                <Grid.Col span={8}>
                    <div>
                        <Scene />
                    </div>
                </Grid.Col>
            </Grid>
            <div>
                <Text size="xl" className={classes.header}>Diagnóstico Inicial</Text>
                <StatsGrid></StatsGrid>
            </div>
        </div>
    );
}