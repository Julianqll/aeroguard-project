"use client";
import { DataCard } from "../../../components/DataCard/DataCard";
import { DonutChart } from "../../../components/DonutChart/DonutChart";
import { GET_USERS } from "../../../queries/userQuery";
import { List } from "@mantine/core";
import createApolloClient from "../../../apollo-client";

export default async function PruebaPage() {
    const client = createApolloClient();
    const { data } = await client.query({
      query: GET_USERS,
    });
    return <div>
        Esto es una prueba de graphql
        <List>
        {data.usuario.map((usuario:any) => {
            return (
                <List.Item>{usuario.nombre}</List.Item>
            );
        })}
        </List>
        <DonutChart></DonutChart>
    </div>;
  }
  