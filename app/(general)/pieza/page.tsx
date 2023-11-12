"use client";


import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FormularioPiezas } from '../../../components/FormularioPiezas/FormularioPiezas';

export default function piezaPage (){
  const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }  
  return (
      <FormularioPiezas></FormularioPiezas>
  )
}
