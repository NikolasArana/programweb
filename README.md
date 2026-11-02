# Solara – Gestión de clientes

## Descripción
Aplicación web Full-Stack para gestionar clientes. Permite listar, registrar, editar y eliminar clientes desde una interfaz en React, que se comunica con una API REST desarrollada con Node.js y Express, y guarda los datos de forma persistente en MongoDB mediante Mongoose.

## Tecnologías utilizadas

**Frontend (`client/`)**
- React y TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack React Query
- Font Awesome

**Backend (`server/`)**
- Node.js y Express
- TypeScript (ejecutado con `tsx`)
- MongoDB y Mongoose
- cors y dotenv

## Estructura del proyecto
```
programweb/
├── client/            # Frontend: React + TypeScript
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── .env.example
├── server/            # Backend: Node.js + Express
│   ├── src/
│   │   ├── config/        # Conexión a MongoDB y variables de entorno
│   │   ├── middlewares/   # Manejo de errores
│   │   ├── models/        # Modelos de Mongoose
│   │   ├── routes/        # Rutas de la API
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── .env.example
└── README.md
```

## Requisitos previos
- [Node.js](https://nodejs.org/) 18 o superior (incluye npm)
- Una base de datos MongoDB: local o en [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Git](https://git-scm.com/)

## Instalación
1. Clona el repositorio y entra a la carpeta:
```bash
git clone https://github.com/NikolasArana/programweb.git
cd programweb
```

2. Instala las dependencias del backend:
```bash
cd server
npm install
```

3. Instala las dependencias del frontend:
```bash
cd ../client
npm install
```

## Configuración de variables de entorno
Cada carpeta tiene un archivo `.env.example` con los nombres de las variables. Cópialo como `.env` y completa tus valores.

**Backend**
```bash
cd server
cp .env.example .env
```
Contenido de `server/.env.example`:
```
PORT=3000
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster0.xxxxx.mongodb.net/Tabla?retryWrites=true&w=majority
```

| Variable | Descripción |
|---|---|
| `PORT` | Puerto donde corre el servidor (por defecto 3000). |
| `MONGODB_URI` | Cadena de conexión a MongoDB. |

**Frontend**
```bash
cd client
cp .env.example .env
```
Contenido de `client/.env.example`:
```
VITE_API_URL=http://localhost:3000
```

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL del backend. Debe coincidir con el puerto del servidor. |



## Configuración de MongoDB

### Opción A: MongoDB Atlas (en la nube)
1. Crea una cuenta en MongoDB Atlas y un clúster gratuito (M0).
2. En *Database & Network Access* crea un usuario con contraseña (sin caracteres especiales, para evitar problemas en la URI).
3. En *Network Access* permite tu dirección IP.
4. En el clúster, haz clic en *Connect > Drivers* y copia la cadena de conexión.
5. Pégala en `server/.env` como `MONGODB_URI`, reemplazando usuario y contraseña, y agregando el nombre de la base de datos (`Tabla`) antes del signo `?`.

### Opción B: MongoDB local
1. Instala MongoDB Community Server e inicia el servicio.
2. Usa esta cadena en `server/.env`:
```
MONGODB_URI=mongodb://127.0.0.1:27017/Tabla
```

La base de datos y la colección (`Tabla`) se crean automáticamente al guardar el primer registro.

## Ejecución en modo desarrollo
Se necesitan dos terminales, una para cada parte.

**Backend** (http://localhost:3000):
```bash
cd server
npm run dev
```
Si la conexión es correcta, la consola muestra: `conectado exitosamente a MongoDB`.

**Frontend** (http://localhost:5173):
```bash
cd client
npm run dev
```

## Funcionalidades principales
- **Listar clientes** guardados en MongoDB, mostrados dinámicamente en una tabla.
- **Registrar clientes** mediante un formulario controlado, con validación de campos obligatorios, del formato del correo y del monto.
- **Editar clientes** existentes desde el mismo formulario.
- **Eliminar clientes** con una confirmación previa.
- **Mensajes de error** del servidor y de conexión, y estados de carga en la interfaz.
- **API REST** con validación de datos y respuestas en formato JSON.
- **Persistencia** de los datos en MongoDB con Mongoose.
- **Navegación** entre páginas con React Router.

