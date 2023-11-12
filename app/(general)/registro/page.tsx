"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import FormularioRegistro from "../../../components/FormularioRegistro/FormularioRegistro";

function RegistroPage() {
    const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }
    return (<FormularioRegistro></FormularioRegistro>);
}

export default RegistroPage;
