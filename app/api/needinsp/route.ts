import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { HttpLink } from 'apollo-link-http';
import { GET_AVION_COMPONENTE } from "../../../queries/avionComponenteQuery";
import { GET_COMPONENTE_PIEZA } from "../../../queries/componentePieza";
import { INSERT_FORMULARIO_ONE } from "../../../queries/formularioQuery";

// Configuración del cliente Apollo
const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASURA_URI,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-access-key": process.env.NEXT_PUBLIC_HASURA_SECRET ?? "",
  },
});

function getRandomInt(max:any) {
  return Math.floor(Math.random() * max);
}

async function getRandomPlaneComponent() {
  try {
    const { data } = await client.query({
      query: GET_AVION_COMPONENTE,
    });
    // Implementa tu lógica para seleccionar un componente aleatorio
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getComponentPieces(componentId:any, numberPieces:number) {
  try {
    const { data } = await client.query({
      query: GET_COMPONENTE_PIEZA,
      variables: { _eq: componentId, limit: numberPieces },
    });
    // Implementa tu lógica para seleccionar piezas aleatorias
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRandomDiagnosis() {
  let randomNumberPieces = getRandomInt(3);
  const randomPlaneComponent = await getRandomPlaneComponent();
  const componentPieces = await getComponentPieces(randomPlaneComponent.avionComponente[0].idComponente, randomNumberPieces);
  const idPlane = randomPlaneComponent.avionComponente[0].idAvion;
  const registryNum = randomPlaneComponent.avionComponente[0].avion.numRegistro;
  const now = new Date();

  let name = `Formulario Inicial del Avion ${registryNum} - ${now.toLocaleDateString()}`;
  const formulario = {
    nombre: name,
    idTipoFormulario: 1,
    diagnostico: componentPieces,
    idAvion: idPlane,
  };

  const { data } = await client.mutate({
    mutation: INSERT_FORMULARIO_ONE,
    variables: { object: formulario}
  });

  if(data)
  {
    console.log(data);
    return true;
  }
  return false;

}

export async function GET() {
  try {
    const diagnosis = await getRandomDiagnosis();
    if (diagnosis)
    {
      return Response.json({ "InspecCreated" : true });
    }
  } catch (error) {
    console.log(error);
  }
}