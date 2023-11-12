"use client";


import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { FormularioCambioPiezas } from '../../../components/FormularioCambioPiezas/FormularioCambioPiezas';

export default function piezaPage (){
  const {data : session} = useSession();
    if (!session) {
      redirect("/signIn")
    }  
  return (
    <FormularioCambioPiezas></FormularioCambioPiezas>      
  )
}
