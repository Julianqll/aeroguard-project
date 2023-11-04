// Reportes.js
"use client";
import { Container, Grid, Text } from '@mantine/core';
import classes from './ListaInformesView.module.css';
import { UsersRolesTable } from '../UserRolesTable/UserRolesTable';

export default function ListaInformesView() {
    return (
        <>
            <div>
                <Text mt={"30px"} size="xl" className={classes.header}>Lista de informes iniciales</Text>
                <UsersRolesTable></UsersRolesTable>
            </div>
            <div>
                <Text mt={"30px"} size="xl" className={classes.header}>Lista de informes finales</Text>
                <UsersRolesTable></UsersRolesTable>
            </div>
        </>
    );
}