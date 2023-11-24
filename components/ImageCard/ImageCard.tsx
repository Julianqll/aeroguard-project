import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, rem, useMantineTheme } from '@mantine/core';
import classes from './ImageCard.module.css';

export function ImageCard({image, title, description, href}: any) {
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href={href}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
          `url(${image})`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {title}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
            {description}
            </Text>
          </Group>
        </div>
      </div>
    </Card>
  );
}