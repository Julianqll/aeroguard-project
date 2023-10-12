import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { getServerSession } from "next-auth";
import { theme } from "../theme";
import SessionProvider from "../components/SessionProvider";


export const metadata = {
  title: "AeroGuard",
  description: "Mantenimiento de aviones",
};

export default async function RootLayout({ children }: { children: any }) {

  const session = await getServerSession();
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <SessionProvider session={session}>
            <MantineProvider theme={theme}>{children}</MantineProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
