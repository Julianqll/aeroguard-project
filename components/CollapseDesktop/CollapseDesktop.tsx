"use client";
import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, ScrollArea, Skeleton } from '@mantine/core';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
  } from '@tabler/icons-react';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import classes from './CollapseDesktop.module.css';
import { UserButton } from '../UserButton/UserButton';
import { AuthButton } from '../AuthButton';


const mockdata = [
    { label: 'Dashboard', icon: IconGauge },
    {
      label: 'Market news',
      icon: IconNotes,
      initiallyOpened: true,
      links: [
        { label: 'Overview', link: '/' },
        { label: 'Forecasts', link: '/' },
        { label: 'Outlook', link: '/' },
        { label: 'Real time', link: '/' },
      ],
    },
    {
      label: 'Releases',
      icon: IconCalendarStats,
      links: [
        { label: 'Upcoming releases', link: '/' },
        { label: 'Previous releases', link: '/' },
        { label: 'Releases schedule', link: '/' },
      ],
    },
    { label: 'Analytics', icon: IconPresentationAnalytics },
    { label: 'Contracts', icon: IconFileAnalytics },
    { label: 'Settings', icon: IconAdjustments },
    {
      label: 'Security',
      icon: IconLock,
      links: [
        { label: 'Enable 2FA', link: '/' },
        { label: 'Change password', link: '/' },
        { label: 'Recovery codes', link: '/' },
      ],
    },
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
          AeroGuard
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="sm">
        <ScrollArea className={classes.links}>
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
        <div className={classes.footer}>
          <UserButton />
          <AuthButton></AuthButton>
        </div>
        </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}