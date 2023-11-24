"use client";
import FormularioView from "../../../../components/FormularioView/FormularioView";

export default function FormularioPage({ params }: { params: { id: string } }) {
    return (
        <FormularioView id={params.id}/>
    );
  }