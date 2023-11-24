// Reportes.js
"use client";
import { Button, Container, Grid, Text } from '@mantine/core';
import classes from './AirplaneModelView.module.css';
import Scene from '../Airplane/Airplane';
import { TableSelection } from '../TableSelection/TableSelection';
import { TableReviews } from '../TableReviews/TableReviews';
import { ImageCard } from '../ImageCard/ImageCard';
import { GET_AVION_QUERY_BY_ID } from '../../queries/avionQuery';
import { useMutation, useQuery } from '@apollo/client';
import Selector from '../Selector/Selector';
import { useEffect, useState } from 'react';
import { IconCheck, IconFileInfo, IconX } from '@tabler/icons-react';
import { INSERT_ASIGNACION } from '../../queries/asignacionAvionQuery';
import { notifications } from '@mantine/notifications';
import { client } from '../../apolloClient';
import { useSession } from 'next-auth/react';
import { QUERY_FORMULARIO_BY_AVION } from '../../queries/formularioQuery';
import { StatsGrid } from '../StatsGrid/StatsGrid';

export default function AirplaneModelView({id} :any) {
    const {data : session} = useSession();
    let admin:boolean = false;
  
    if (session?.user.rol == 1)
    {
      admin = true;
    }

    const [valueTecnico, setValueTecnico] = useState<string | null>(null);
    const [valueEditar, setValueEditar] = useState<boolean>(false);

    const { data, loading, error } = useQuery(GET_AVION_QUERY_BY_ID, {
        variables: { _eq:id },
    });

    const [addAsignacion, { data:asignacionData, loading:asignacionLoading, error:asignacionError }] = useMutation(INSERT_ASIGNACION);

    const { data:avionFormData, loading:loadingAvionForm, error: errorAvionForm } = useQuery(QUERY_FORMULARIO_BY_AVION, {
        variables: { _eq:id },
    });
    if (loading) {
        return (<div>Cargando contenido...</div>)
    }
      
      const handleGuardar = async () => {

        const now = new Date();
        const asignacion = {
            idUsuario: valueTecnico?.toString(),
            idAvion: id,
            fechaRegistro: now,
        };
    
        try {
            const response = await addAsignacion({ variables: { object: asignacion } });
            notifications.show({
            color: 'green',
            title: 'Asignación Registrada',
            message: <>
            Se ha creado la asignación {response.data.insert_asignacionAvion_one.idAsignacionAvion} con éxito
            </>,
            icon: <IconCheck size="1rem" />,
            autoClose: false
            });
        } catch (error) {
            console.log(error);
            notifications.show({
                color: 'red',
                title: 'Error en el registro',
                message: 'Hubo un error registrando la asignación',
                icon: <IconX size="1rem" />,
                autoClose: false
                });
        }
      };
    

    return (
        <div className={classes.container}>
            <Text size="xl" className={classes.header}>Avión Modelo {data?.avion[0].numRegistro}</Text>
            <Grid columns={12}>
                <Grid.Col span={4} mt={"90px"}>
                    {admin ? 
                    <Container p={"30px"} h={"150px"}>
                    <Text>Datos del avión</Text>
                    <Text>Numero de serie: {data?.avion[0].numSerie}</Text>
                    <Text>Certificado: {data?.avion[0].tipoCertificado}</Text>
                    <Text>Tecnico Asignado: </Text>
                    {(data?.avion[0].asignacionAvions[0] && !valueEditar) ? 
                    <>
                    <Text>{data?.avion[0].asignacionAvions[0].usuario.nombres} {data?.avion[0].asignacionAvions[0].usuario.apellidos}</Text>
                    <Button 
                        ml={15} 
                        rightSection={<IconFileInfo size={14} />} 
                        onClick={() => setValueEditar(true)}
                        >
                            Editar
                    </Button>
                    </>
                    : <>
                        <Text>*Se necesita asignar</Text>
                        <Selector type="tecnico" value={valueTecnico} setValue={setValueTecnico} />
                        <Button 
                        ml={15} 
                        rightSection={<IconFileInfo size={14} />} 
                        onClick={handleGuardar}
                        >
                            Guardar
                        </Button>
                    </>
                    }
                </Container>
                    :
                    <Container p={"30px"} h={"150px"}>
                        <Text>Datos del avión</Text>
                        <Text>Numero de serie: {data?.avion[0].numSerie}</Text>
                        <Text>Certificado: {data?.avion[0].tipoCertificado}</Text>
                    </Container>
                    }

                </Grid.Col>
                <Grid.Col span={8}>
                    <div>
                        <Scene />
                    </div>
                </Grid.Col>
            </Grid>
            {admin ? 
            <>
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
            </>
            :
            <>
            <div>
                <Text mt={"30px"} size="xl" className={classes.header}>Formulario Pendiente</Text>
                {loadingAvionForm ? <div>Cargando contenido...</div> : null}
                {avionFormData?.formulario[0].nombre}
                <StatsGrid></StatsGrid>
            </div>
            <div>
                <Text mt={"30px"} size="xl" className={classes.header}>Historial de formularios</Text>
                <TableReviews></TableReviews>
            </div>
            <div>
                <Text size="xl" className={classes.header}>Historial de Directivas</Text>
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
            </>
            }

        </div>
    );
}