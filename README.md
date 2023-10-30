# AeroGuard

## Introducción

Nuestra plataforma innovadora está diseñada específicamente para propietarios, operadores y técnicos de avionetas, brindando una solución integral para el mantenimiento, gestión y seguimiento del estado de tus aeronaves.

### Equipo de Desarrollo

- **Galvan Oyague, Andres Daniel**
- **Lorenzo Vizcarra, Paris Lorelay**
- **Quispe Lau Len, Julian Marcelo**

## Stack Tecnológico

Este proyecto está construido utilizando las siguientes tecnologías y herramientas:

- **Next.js**: Framework de React para producción.
- **Yarn**: Gestor de dependencias.
- **Hasura**: Motor de base de datos instantáneo y autohospedado.
- **Auth**: Autenticación con NextAuth.js.

## Configuración del Entorno

Para configurar el entorno de desarrollo local, sigue estos pasos:

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/Julianqll/aeroguard-project
   cd aeroguard-project
   ```

2. **Instala las dependencias**

   Utilizando Yarn, instala las dependencias del proyecto ejecutando:

   ```bash
   yarn
   ```

3. **Configura las variables de entorno**

   Crea un nuevo archivo llamado `.env` y actualiza las variables de entorno:

   ```env
   NEXTAUTH_URL=
   NEXTAUTH_SECRET=
   API_TOKEN=
   NEXT_PUBLIC_HASURA_URI=
   NEXT_PUBLIC_HASURA_SECRET=
   ```

   - `NEXTAUTH_URL`: URL completa de tu entorno Next.js (generalmente `http://localhost:3000` durante el desarrollo local).
   - `NEXTAUTH_SECRET`: Un secreto aleatorio utilizado para cifrar los tokens de sesión.
   - `API_TOKEN`: Token de acceso para APIs externas, si es aplicable.
   - `NEXT_PUBLIC_HASURA_URI`: URI de conexión a tu motor Hasura.
   - `NEXT_PUBLIC_HASURA_SECRET`: Secreto para autenticar con Hasura.

## Ejecutando el Proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```bash
yarn dev
```

Esto iniciará el servidor en [http://localhost:3000](http://localhost:3000). Navega a esta URL en tu navegador para ver la aplicación en ejecución.
