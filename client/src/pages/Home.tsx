import { Banner } from "../home/Banner"
import { Contacto } from "../home/Contacto"
import { Datos } from "../home/Datos"
import { Equipo } from "../home/Equipo"
import { Nosotros } from "../home/Nosotros"
import { Tabla } from "../home/Tabla"
import { Testimonios } from "../home/Testimonios"
import { Text } from "../home/Text"


export const Home = () => {
    return (
        <>
                  <Banner />
            
                  <Nosotros />
            
                  <Datos />
            
                  <Testimonios />
            
                  <Text />
            
                  <Equipo />
            
                  <Tabla />
            
                  <Contacto />
        </>
    )
}
