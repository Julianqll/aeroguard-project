"use client";
import { AuthenticationImage } from "../../components/AuthenticationImage/AuthenticationImage";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function SignInPage() {
  const {data : session} = useSession();
    if (session) {
      redirect("/dashboard")
    }
    return <AuthenticationImage></AuthenticationImage>;
  }
  