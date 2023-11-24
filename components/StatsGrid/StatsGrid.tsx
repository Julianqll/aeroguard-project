import { Button, Group, Paper, SimpleGrid, Text } from '@mantine/core';
import {
  IconEngine
} from '@tabler/icons-react';
import classes from './StatsGrid.module.css';
import { useRouter } from 'next/navigation';



export function StatsGrid(id:number) {

  const router = useRouter();

  const data = [
    { title: 'Directivas', icon: 'receipt',  value: 'Completado' , link:`/directiva/${id}`},
    { title: 'Inspección', icon: 'coin',  value: 'Pendiente' ,  link:`/inspeccion/${id}`},
    { title: 'Cambio', icon: 'discount',  value: 'Pendiente' ,  link:`/cambio/${id}`},
  ] as const;

  const stats = data.map((stat) => {
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
              onClick={() => router.push(stat.link)}
              >
                Ver más
        </Button>
      </Paper>
    );
  });
  return (
    <div className={classes.root}>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
  );
}