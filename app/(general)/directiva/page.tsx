"use client";
import { useSession } from "next-auth/react";
import DashboardView from "../../../components/DashboardView/DashboardView";
import { redirect } from "next/navigation";
import FormularioDirectivas from "../../../components/FormularioDirectivas/FormularioDirectivas";

export default function DirectivaPage() {
    const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }
    return (<FormularioDirectivas></FormularioDirectivas>);
}