import { useQuery } from "@apollo/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { SIGNIN_USER } from "../../../../queries/userQuery";
import { client } from "../../../../apolloClient";
import bcrypt from "bcryptjs";

export const authOptions = {
  
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // `credentials` is used to generate a form on the sign in page.
          // You can specify which fields should be submitted, by adding keys to the `credentials` object.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            try {
              const { data } = await client.query({
                query: SIGNIN_USER,
                variables: {
                  email: credentials!.username,
                }
              });
          
              if (data && data.usuario.length > 0) {
                let passwordMatches = await bcrypt.compare(credentials!.password, data.usuario[0].contrasena);
                if (passwordMatches)
                {
                  const user = {
                    id: data.usuario[0].id, // Assuming your user has an id field.
                    name: `${data.usuario[0].nombres} ${data.usuario[0].apellidos}`,
                    email: data.usuario[0].correo
                  };
                  return user;
                }else {
                  throw new Error("Las credenciales proporcionadas son incorrectas.");
                }
              } else {
              throw new Error("Usuario no encontrado.");
              }
              
          
              return null; 
            } catch (error) {
              console.error("Error authorizing user:", error);
              return null;
            }
          }
          
          
        })
      ]
}

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};