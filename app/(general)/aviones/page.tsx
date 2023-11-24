"use client";

import { useSession } from "next-auth/react";
import UserListView from "../../../components/UserListView/UserListView";

export default function AvionesPage() {
    const {data : session} = useSession();
    let type;
  
    if (session?.user.rol == 1)
    {
      type = "aviones";
    }
    else if (session?.user.rol == 2)
    {
      type = "aviones_por_tecnico";
  
    }
    return (
        <UserListView type={type}></UserListView>
    );
}
