"use client";
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, ScrollArea, Skeleton, Title } from '@mantine/core';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
  } from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './CollapseDesktop.module.css';
import { UserButton } from '../UserButton/UserButton';


const mockdata = [
    { label: 'Aviones', icon: IconGauge },
    {
      label: 'Reportes',
      icon: IconNotes,
      initiallyOpened: false,
      links: [
        { label: 'Opcion 1', link: '/' },
        { label: 'Opcion 2', link: '/' },
        { label: 'Opcion 3', link: '/' },
      ],
    },
    {
      label: 'Directivas',
      icon: IconCalendarStats,
      links: [
        { label: 'Opcion 1', link: '/' },
        { label: 'Opcion 2', link: '/' },
        { label: 'Opcion 3', link: '/' },
        { label: 'Opcion 4', link: '/' },
        { label: 'Opcion 5', link: '/' },
      ],
    },
    { label: 'Usuarios', icon: IconPresentationAnalytics },
  ];

  
export function CollapseDesktop({
    children,
  }: {
    children: React.ReactNode
  }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

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