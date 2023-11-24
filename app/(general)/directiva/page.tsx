"use client";
import { useSession } from "next-auth/react";
import DashboardView from "../../../components/DashboardView/DashboardView";
import { redirect } from "next/navigation";
import FormularioDirectivas from "../../../components/FormularioDirectivas/FormularioDirectivas";
import StepperDirectivas from "../../../components/StepperDirectivas/StepperDirectivas";

export default function DirectivaPage() {
    const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }
    return (<StepperDirectivas></StepperDirectivas>);
}