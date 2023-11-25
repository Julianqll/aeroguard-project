import { Button, Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
  IconCheck,
  IconEngine,
  IconX
} from '@tabler/icons-react';
import classes from './StatsGrid.module.css';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { QUERY_UPDATE_FORMULARIO } from '../../queries/formularioQuery';
import { notifications } from '@mantine/notifications';
import { client } from '../../apolloClient';



export function StatsGrid(id:number, state:string) {

  const router = useRouter();

  const handleComplete = async() => {
    const { data } = await client.mutate({
      mutation: QUERY_UPDATE_FORMULARIO,
      variables: { idFormulario: id}
    });
  
    if(data)
    {
      console.log(data);
      notifications.show({
        color: 'green',
        title: 'Formulario Completado',
        message: <>
        El formulario fue completado con éxito
        </>,
        icon: <IconCheck size="1rem" />,
        autoClose: false
        });
    }
    else{
      notifications.show({
        color: 'red',
        title: 'Error en la actualización',
        message: 'Hubo un error actualizando el formulario',
        icon: <IconX size="1rem" />,
        autoClose: false
        });
    }
  }



  const dataN = [
    { title: 'Directivas', icon: 'receipt',  value: 'Completado' , link:`/directiva/${id}`},
    { title: 'Inspección', icon: 'coin',  value: 'Pendiente' ,  link:`/inspeccion/${id}`},
    { title: 'Cambio', icon: 'discount',  value: 'Pendiente' ,  link:`/cambio/${id}`},
  ] as const;

  const stats = dataN.map((stat) => {
    const Icon = IconEngine;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text c={stat.value === "Completado" ? 'teal' : 'red'} className={classes.value}>{stat.value}</Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Procedimiento
        </Text>
        <Button 
          ml={15} 
          mt={20}
          onClick={() => router.push(stat.link)}
          >
                Completar
        </Button>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>
        {stats}
        <Paper withBorder p="md" radius="md">
        <Group align="flex-end" gap="xs" mt={25}>
          <Text c={state === "Completado" ? 'teal' : 'red'} className={classes.value}>{state}</Text>
        </Group>
        <Button 
          mt={20}
          ml={15} 
          onClick={handleComplete}
          >
            Finalizar
        </Button>
      </Paper>
        </SimpleGrid>
    </div>
  );
}