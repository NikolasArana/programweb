import Heading from "../components/Headings"

export const Datos = () => {
    return (
        <section className='bg-[rgba(240,235,229,1)] pb-18'>
            <div className="flex max-w-7xl justify-between mx-auto">
                    <div>
                        <Heading level={3} className="text-muted font-normal">65250+</Heading>
                        <div className="text-muted">Prendas Recicladas</div>
                    </div>

                    <div>
                        <Heading level={3} className="text-muted font-normal">23160+</Heading>
                        <div className="text-muted">Clientes Satisfechos</div>
                    </div>

                    <div>
                        <Heading level={3} className="text-muted font-normal">150+</Heading>
                        <div className="text-muted">Toneladas reciclada</div>
                    </div>

                    <div>
                        <Heading level={3} className="text-muted font-normal">20+</Heading>
                        <div className="text-muted">Premios Obtenidos</div>
                    </div>
            </div>
        </section>
    )
}
