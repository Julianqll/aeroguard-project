import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem } from '@mantine/core';
import classes from './TableSelection.module.css';

export function TableSelection({
  type,
  data
}: any) {
  let rows = [];
  let headers: any[] = [];
  if (type === 'aviones')
  {
    headers = ["Numero de Registro","Numero de Serie", "Certificado"];
     rows = data.avion!.map((item:any) => {
      return (
        <Table.Tr key={item.idUsuario}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} radius={26} />
              <Text size="sm" fw={500}>
                {item.nombres} {item.apellidos}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.correo}</Table.Td>
          <Table.Td>{item.numeroDocumento}</Table.Td>
        </Table.Tr>
      );
    });
  }
  else if (type === 'usuarios')
  {
    headers = ["Usuario","Correo", "Documento"];
    rows = data.usuario!.map((item:any) => {
      return (
        <Table.Tr key={item.idUsuario}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} radius={26} />
              <Text size="sm" fw={500}>
                {item.nombres} {item.apellidos}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.correo}</Table.Td>
          <Table.Td>{item.numeroDocumento}</Table.Td>
        </Table.Tr>
      );
    });
  }

  let theaders = headers.map((item:any) => {
    return (
        <Table.Th>{item}</Table.Th>
    );
  });
  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            {theaders}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}