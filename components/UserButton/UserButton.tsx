"use client";
import { UnstyledButton, Group, Avatar, Text, rem, Button } from '@mantine/core';
import { IconChevronRight, IconDownload } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { AuthButton } from '../AuthButton';
import {signIn, signOut, useSession} from "next-auth/react";


export function UserButton() {
  const {data : session} = useSession();
  
  return (
    <>
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
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
      <Button rightSection={<IconDownload size={14} />} onClick={() => signOut()}>Salir</Button>
      : null}
      </>
  );
}