"use client";
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          AeroGuard
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button 
            className={classes.control} 
            variant="white" 
            size="lg"
            onClick={() => window.location.href="/signIn"}
          >
            Get started
          </Button>
        </div>
      </div>
    </div>
  );
}