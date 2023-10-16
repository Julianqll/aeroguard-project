// Reportes.js
"use client";
import { Paper, Text, Grid, Flex } from '@mantine/core';
import classes from './DashboardView.module.css';
import { PieChart } from '../PieChart/PieChart';
import { TableReviews } from '../TableReviews/TableReviews';

export default function DashboardView() {
    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Reportes</Text>

            <Grid gutter="xs" className={classes.metricsWrapper}>
                <Paper className={classes.metricBox}>
                    <div>
                        <Text size="xl">178+</Text>
                        <Text>Save Products</Text>
                    </div>
                    <div>
                        <Text size="xl">20+</Text>
                        <Text>Stock Products</Text>
                    </div>
                </Paper>

                <Paper className={classes.chartWrapper}>
                    <Text>Your Pie Chart</Text>
                    <PieChart />
                </Paper>
            </Grid>

            <div>
                <Text size="lg" className={classes.tableHeader}>Reportes de Inspecciones #MEC0023</Text>
                <TableReviews />
            </div>
        </div>
    );
}
