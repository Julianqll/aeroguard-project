"use client";
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, ScrollArea, Skeleton, Title } from '@mantine/core';
import {
    IconNotes,
    IconCalendarStats,
    IconPlaneInflight,
    IconUsers,
    IconTable,
    IconFilePencil
  } from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './CollapseDesktop.module.css';
import { UserButton } from '../UserButton/UserButton';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';


  const mockdata_admin = [
    { label: 'Aviones', icon: IconPlaneInflight },
    { label: 'Reportes', icon: IconNotes },
    { label: 'Directivas', icon: IconCalendarStats },
    { label: 'Usuarios', icon: IconUsers },
  ];

  const mockdata_gestor = [
    { label: 'Inventario', icon: IconTable },
    { label: 'Solicitudes', icon: IconFilePencil },
  ];

  const mockdata_tecnico = [
    { label: 'Aviones', icon: IconPlaneInflight },
    { label: 'Reportes', icon: IconNotes },
    { label: 'Directivas', icon: IconCalendarStats },
  ];

export function CollapseDesktop({
    children,
    data
  }: {
    children: React.ReactNode,
    data: Session | null;
  }) {

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  let mockdata;

  if (data?.user.rol == 1)
  {
    mockdata = mockdata_admin;
  }
  else if (data?.user.rol == 2)
  {
    mockdata = mockdata_tecnico;

  }
  else if (data?.user.rol == 4)
  {
    mockdata = mockdata_gestor;
  }
  const links = mockdata!.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 310,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <Title order={2} ta="center">
            AeroGuard
          </Title>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="sm">
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
        <div className={classes.footer}>
          <UserButton />
        </div>
        </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}