import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
import { IconPlane } from '@tabler/icons-react';
import classes from './StatsCard.module.css';

export function StatsCard() {
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <ThemeIcon className={classes.icon} size={60} radius={60}>
        <IconPlane style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
      </ThemeIcon>

      <Text ta="center" fw={700} className={classes.title}>
      Avión Modelo XXXXX
      </Text>


      <Group justify="space-between" mt="xs">
        <Text fz="sm" c="dimmed">
          Estado completo
        </Text>
        <Text fz="sm" c="dimmed">
          62%
        </Text>
      </Group>

      <Progress value={62} mt={5} />

      <Group justify="space-between" mt="md">
        <Text fz="sm">Ingreso: 03/11/23</Text>
        <Badge size="sm">5 días restantes</Badge>
      </Group>
    </Paper>
  );
}