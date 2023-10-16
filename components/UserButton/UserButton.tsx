"use client";
import { UnstyledButton, Group, Avatar, Text, rem, Button } from '@mantine/core';
import { IconChevronRight, IconDownload } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import {signIn, signOut, useSession} from "next-auth/react";


export function UserButton() {
  const {data : session} = useSession();
  
  return (
    <>
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {session?.user?.name}
          </Text>

          <Text c="dimmed" size="xs">
          {session?.user?.name}
          </Text>
        </div>

        <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} />
      </Group>
    </UnstyledButton>
      {session ? 
      <Button ml={15} rightSection={<IconDownload size={14} />} onClick={() => signOut()}>Salir</Button>
      : null}
      </>
  );
}