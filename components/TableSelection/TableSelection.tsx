import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem, Button } from '@mantine/core';
import classes from './TableSelection.module.css';
import { IconFileInfo } from '@tabler/icons-react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


export function TableSelection({
  type,
  data
}: any) {
  let rows = [];
  let headers: any[] = [];
  const router = useRouter();

  if (type === 'aviones')
  {
    headers = ["Numero de Registro","Numero de Serie", "Certificado", "Información"];
     rows = data.avion!.map((item:any) => {
      return (
        <Table.Tr key={item.idAvion}>
          <Table.Td>
            <Group gap="sm">
              <Text size="sm" fw={500}>
                {item.numRegistro}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.numSerie}</Table.Td>
          <Table.Td>{item.tipoCertificado}</Table.Td>
          <Table.Td>
            <Button 
              ml={15} 
              rightSection={<IconFileInfo size={14} />} 
              onClick={() => router.push(`/avion/${item.idAvion}`)}
              >
                Información
            </Button>
          </Table.Td>
        </Table.Tr>
      );
    });
  }
  else if (type === 'aviones_por_tecnico')
  {
    headers = ["Numero de Registro","Numero de Serie", "Certificado", "Información"];
     rows = data.avion!.map((item:any) => {
      return (
        <Table.Tr key={item.idAvion}>
          <Table.Td>
            <Group gap="sm">
              <Text size="sm" fw={500}>
                {item.numRegistro}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.numSerie}</Table.Td>
          <Table.Td>{item.tipoCertificado}</Table.Td>
          <Table.Td>
            <Button 
              ml={15} 
              rightSection={<IconFileInfo size={14} />} 
              onClick={() => router.push(`/avion/${item.idAvion}`)}
              >
                Información
            </Button>
          </Table.Td>
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
  else if (type === 'reportes_inspecciones')
  {
    headers = ["Discrepancia","Accion Correctiva", "Referencia"];
    rows = data.reporteInspeccion!.map((item:any) => {
      return (
        <Table.Tr key={item.idReporteInspeccion}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} radius={26} />
              <Text size="sm" fw={500}>
                {item.discrepancia}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.accionCorrectiva}</Table.Td>
          <Table.Td>{item.referencia}</Table.Td>
        </Table.Tr>
      );
    });
  }
  else if (type === 'reportes_cambios')
  {
    headers = ["Discrepancia","Accion Correctiva", "Pieza"];
    rows = data.reporteCambioPiezas!.map((item:any) => {
      return (
        <Table.Tr key={item.idReporteCamP}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} radius={26} />
              <Text size="sm" fw={500}>
                {item.discrepancia}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.accionCorrectiva}</Table.Td>
          <Table.Td>{item.pieza.nombre}</Table.Td>
        </Table.Tr>
      );
    });
  }
  else if (type === 'formularios')
  {
    headers = ["Tipo Formulario","Nombre", "Id Avion", "Ver más"];
    rows = data.formulario!.map((item:any) => {
      return (
        <Table.Tr key={item.idFormulario}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} radius={26} />
              <Text size="sm" fw={500}>
                {item.tipoFormulario.tipoFormulario}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.nombre}</Table.Td>
          <Table.Td>{item.idAvion}</Table.Td>
          <Table.Td>
          <Button 
              ml={15} 
              rightSection={<IconFileInfo size={14} />} 
              onClick={() => router.push(`/formulario/${item.idFormulario}`)}
              >
                Ver más
            </Button>
          </Table.Td>
        </Table.Tr>
      );
    });
  }
  else if (type === 'formularios_por_tecnico')
  {
    headers = ["Tipo Formulario","Nombre", "Id Avion", "Ver más"];
    rows = data.formulario?.map((item:any) => {
      return (
        <Table.Tr key={item.idFormulario}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} radius={26} />
              <Text size="sm" fw={500}>
                {item.tipoFormulario.tipoFormulario}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.nombre}</Table.Td>
          <Table.Td>{item.idAvion}</Table.Td>
          <Table.Td>
          <Button 
              ml={15} 
              rightSection={<IconFileInfo size={14} />} 
              onClick={() => router.push(`/formulario/${item.idFormulario}`)}
              >
                Ver más
            </Button>
          </Table.Td>
        </Table.Tr>
      );
    });
  }
  else if(type === "formularios_avion")
  {
    headers = ["Tipo Formulario","Nombre", "Id Avion", "Fecha"];
    rows = data?.formulario?.map((item:any) => {
      return (
        <Table.Tr key={item.idFormulario}>
          <Table.Td>
            <Group gap="sm">
              <Avatar size={26} radius={26} />
              <Text size="sm" fw={500}>
                {item.tipoFormulario.tipoFormulario}
              </Text>
            </Group>
          </Table.Td>
          <Table.Td>{item.nombre}</Table.Td>
          <Table.Td>{item.idAvion}</Table.Td>
          <Table.Td>
          <Button 
              ml={15} 
              rightSection={<IconFileInfo size={14} />} 
              onClick={() => router.push(`/formulario/${item.idFormulario}`)}
              >
                Ver más
            </Button>
          </Table.Td>
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