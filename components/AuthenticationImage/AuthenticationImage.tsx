"use client";
import {
    Paper,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
  import classes from './AuthenticationImage.module.css';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { IconX } from '@tabler/icons-react';
import { signIn } from 'next-auth/react';

export function AuthenticationImage() {
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const handleLogin = async () => {
      if (!valueEmail || !valuePassword) {
        notifications.show({
          color: 'red',
          title: 'Completar campos',
          message: 'Por favor completa todos los campos',
          icon: <IconX size="1rem" />,
          autoClose: false
        });
        return;
      }
    
      const result = await signIn("credentials", {
        username: valueEmail,
        password: valuePassword,
        redirect: false,
      });

      if (result!.error) {
        notifications.show({
            color: 'red',
            title: 'Error de inicio de sesión',
            message: result!.error,
            icon: <IconX size="1rem" />,
            autoClose: false
        });
    } else {
        // Redirecciona en caso de éxito
        window.location.href = "/dashboard";
    }
    };
    
    return (
      <div className={classes.wrapper}>
        <Title order={2} className={classes.topLeftText} ta="center" mt="md" m={20}>
          AeroGuard
        </Title>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
            Iniciar sesión
          </Title>
  
          <TextInput 
            label="Correo electrónico" 
            placeholder="hello@gmail.com" 
            size="md" 
            value={valueEmail}
            onChange={(event) => setValueEmail(event.currentTarget.value)}
          />
          <PasswordInput 
            label="Contraseña" 
            placeholder="Tu contraseña" 
            mt="md" 
            size="md" 
            value={valuePassword}
            onChange={(event) => setValuePassword(event.currentTarget.value)}
          />
          <Button fullWidth mt="xl" size="md" onClick={handleLogin}>
            Ingresar
          </Button>
  
        </Paper>
      </div>
    );
  }