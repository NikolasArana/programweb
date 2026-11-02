import{ createBrowserRouter } from "react-router"
import { RootLayout } from "./layouts/RootLayout"
import { Home } from "./pages/Home"
import { Proyectos } from "./pages/Proyectos"
import { Contactenos } from "./pages/Contactenos"
import { Proveedores } from "./pages/Proveedores"
import { Empleados } from "./pages/Empleados"
import { Page404 } from "./pages/Page404"
import { Oficinas } from "./pages/oficinas"
export const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        { index: true, element: <Home /> },
        { path: "proyectos", element: <Proyectos /> },
        { path: "proveedores", element: <Proveedores /> },
        { path: "empleados", element: <Empleados /> },
        { path: "contactenos", element: <Contactenos /> },
        { path: "oficinas", element: <Oficinas /> },
        { path: "*", element: <Page404 /> },

    ]
}])