// Reportes.js
"use client";
import { Text } from '@mantine/core';
import classes from './UserListView.module.css';
import { TableSelection } from '../TableSelection/TableSelection';

export default function UserListView() {
    return (
        <div className={classes.container}>
            <div>
                <Text size="xl" className={classes.header}>Usuarios registrados</Text>
                <TableSelection></TableSelection>
            </div>
        </div>
    );
}
