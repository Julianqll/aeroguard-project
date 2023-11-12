"use client";
import { useSession } from "next-auth/react";
import DashboardView from "../../../components/DashboardView/DashboardView";
import { redirect } from "next/navigation";

export default function DashboardPage() {
    const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }
    return (<DashboardView></DashboardView>);
}
