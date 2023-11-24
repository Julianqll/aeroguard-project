// Reportes.js
"use client";
import { Paper, Text, Grid, Flex, rem } from '@mantine/core';
import classes from './DashboardView.module.css';
import { PieChart } from '../PieChart/PieChart';
import { TableReviews } from '../TableReviews/TableReviews';
import UserListView from '../UserListView/UserListView';

export default function DashboardView() {
    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Reportes</Text>

            <Grid align='center' columns={12} gutter="xs" className={classes.metricsWrapper}>
                <Grid.Col span={4}>
                <Flex gap={"100px"} mt={"30px"} direction="column" align="center" style={{ height: '350px' }}>
                        <div>
                            <Text size="xl">178+</Text>
                            <Text>Save Products</Text>
                        </div>
                        <div>
                            <Text size="xl">20+</Text>
                            <Text>Stock Products</Text>
                        </div>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8} mb={"30px"}>
                    <Paper className={classes.chartWrapper}>
                        <Text>Your Pie Chart</Text>
                        <PieChart />
                    </Paper>
                </Grid.Col>
            </Grid>

            <UserListView type="formularios"></UserListView>
        </div>
    );
}
