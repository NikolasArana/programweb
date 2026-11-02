import Heading from "../components/Headings"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{
    faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons"

export const Text = () => {
    return (
      <section className='bg-[rgba(240,235,229,1)] pb-10 pt-23 '>
            <div className="flex max-w-7xl items-center justify-between mx-auto">
                    <div>
                        <div className="mb-2 text-muted">OUR TEAM</div>
                        <Heading level={2} className="max-w-sm text-muted font-normal">CONOCE A LOS EXPERTOS DETRÁS DE NUESTRO ÉXITO</Heading>
                    </div>

                    <div> 
                        <div className="max-w-sm text-muted/80">Nuestro equipo de expertos apasionados impulsa resultados extraordinarios. Con habilidades diversas y una visión compartida, transformamos ideas innovadoras en proyectos reales y superamos cada expectativa.</div>
                    </div>

                    <div className="flex gap-2">
                        <div className="size-10 flex items-center justify-center rounded-full  text-[rgba(240,235,229,1)] bg-[rgba(128,82,49,1)]">
                        <FontAwesomeIcon icon={faChevronLeft}  /> 
                        </div>
                        <div className="size-10 flex items-center justify-center rounded-full  text-[rgba(240,235,229,1)] bg-[rgba(128,82,49,1)]">
                        <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
            </div>
        </section>
    )
}
