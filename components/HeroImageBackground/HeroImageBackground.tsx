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
          En Aeroguard, entendemos la pasión y la responsabilidad que conlleva volar. Nuestra plataforma innovadora está diseñada específicamente para propietarios, operadores y técnicos de avionetas, brindando una solución integral para el mantenimiento, gestión y seguimiento del estado de tus aeronaves
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button 
            className={classes.control} 
            variant="white" 
            size="lg"
            onClick={() => window.location.href="/signIn"}
          >
            Ingresar
          </Button>
        </div>
      </div>
    </div>
  );
}