"use client";
import { DataCard } from "../../../components/DataCard/DataCard";
import { DonutChart } from "../../../components/DonutChart/DonutChart";
import { GET_USERS } from "../../../queries/userQuery";
import { List } from "@mantine/core";
import { useQuery } from "@apollo/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function PruebaPage() {
    const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            Esto es una prueba de graphql
            <List>
            {data.usuario.map((usuario:any) => {
                return (
                    <List.Item key={usuario.id}>{usuario.nombres}</List.Item>
                );
            })}
            </List>
            <DonutChart />
        </div>
    );
}
