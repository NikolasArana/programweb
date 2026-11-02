import Heading from "../components/Headings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{
    faChevronDown, faEquals} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"


    const NAV_ITEMS = [
    { id: "inicio", etiqueta: "Inicio", titulo: "Página principal", ruta: "/" },
    { id: "proyectos", etiqueta: "Proyectos", titulo: "Invierta con nosotros", ruta: "/proyectos" },
    { id: "proveedores", etiqueta: "Iniciar sesion", titulo: "nuestros socios", ruta: "/proveedores" },
    { id: "empleados", etiqueta: "Empleados", titulo: "nuestros colaboradores", ruta: "/empleados" },
    { id: "contactenos", etiqueta: "Clientes", titulo: "siempre en comunicacion", ruta: "/contactenos" }

]


export const MainHeader = () => {
    return (
        <header className=" py-6 bg-[rgba(52,36,28,1)]   top-0   border-border ">
            <div className='flex max-w-7xl mx-auto px-3 items-center justify-between'>
                <Heading level={3} className=" text-white ">SOLARA</Heading>
                <nav aria-label="Principal">
                    <ul className=" text-sm flex gap-5 text-white space-y-1">
                        {NAV_ITEMS.map(itemMenu => (
                            <li key={itemMenu.id}>
                                <Link to={itemMenu.ruta}>{itemMenu.etiqueta} <FontAwesomeIcon icon={faChevronDown} /> </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className=" flex items-center gap-2">
                    <div className="text-white font-bold bg-amber-900 px-6 py-2.5">FREE CONSULTATION</div>
                    <div><FontAwesomeIcon icon={faEquals} className="text-2xl text-white" /></div>
                </div>
            </div>
        </header>
    )
}



