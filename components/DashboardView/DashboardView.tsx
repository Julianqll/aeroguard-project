// Reportes.js
"use client";
import { Paper, Text, Grid, Flex, rem } from '@mantine/core';
import classes from './DashboardView.module.css';
import { PieChart } from '../PieChart/PieChart';
import { TableReviews } from '../TableReviews/TableReviews';
import UserListView from '../UserListView/UserListView';
import { useSession } from 'next-auth/react';

export default function DashboardView() {
    const {data : session} = useSession();
    let table_type;
    let dataGraphs;
    let data;

  if (session?.user.rol == 1)
  {
    table_type = "formularios";
    dataGraphs = {
        cantidad1: "10+",
        descrip1: "Aviones inspeccionados",
        cantidad2: "1+",
        descrip2: "Informes requeridos"
    }
     data = {
        labels: ['Aviones inspeccionados', 'Aviones en mal estado'],
        datasets: [
          {
            label: '# de aviones',
            data: [12, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  }
  else if (session?.user.rol == 2)
  {
    table_type = "formularios_por_tecnico";
    dataGraphs = {
        cantidad1: "10+",
        descrip1: "Informes completados",
        cantidad2: "4+",
        descrip2: "Informes recibidos"
    }
     data = {
        labels: ['Informes con cambios', 'Informes normales'],
        datasets: [
          {
            label: '# de informes',
            data: [20, 10],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  }
  else if (session?.user.rol == 4)
  {
    table_type = "solicitudes";
    dataGraphs = {
        cantidad1: "1K$+",
        descrip1: "Ahorrados",
        cantidad2: "12+",
        descrip2: "Solicitudes atendidas"
    }
     data = {
        labels: ['Pedidos recibidos', 'Pedidos por recibir'],
        datasets: [
          {
            label: '# de aviones',
            data: [10, 5],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
  }

    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Reportes</Text>

            <Grid align='center' columns={12} gutter="xs" className={classes.metricsWrapper}>
                <Grid.Col span={4}>
                <Flex gap={"100px"} mt={"30px"} direction="column" align="center" style={{ height: '350px' }}>
                        <div>
                            <Text size="xl">{dataGraphs?.cantidad1}</Text>
                            <Text>{dataGraphs?.descrip1}</Text>
                        </div>
                        <div>
                            <Text size="xl">{dataGraphs?.cantidad2}</Text>
                            <Text>{dataGraphs?.descrip2}</Text>
                        </div>
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8} mb={"30px"}>
                    <Paper className={classes.chartWrapper}>
                        <Text>Rendimiento del mes</Text>
                        {PieChart(data)}
                    </Paper>
                </Grid.Col>
            </Grid>

            <UserListView type={table_type}></UserListView>
        </div>
    );
}
