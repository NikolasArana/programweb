
import Heading from "../components/Headings"
import polo from "/eventos/tee7.webp"

export const Nosotros = () => {
    return (
        <section className='bg-[rgba(240,235,229,1)] py-20 md:py-24'>
            <div className='max-w-7xl mx-auto px-3 lg:px-8'>
                <div className="grid lg:grid-cols-[2.5fr_3fr] gap-8">

                    <div>
                      <img src={polo} alt="" className="w-full "/>  
                    </div>
                    <div>
                        <p>ABOUT US</p>
                        <Heading level={2} className="  max-w-sm font leading-11 mb-5 text-muted font-normal">PRENDAS 100% RECICLADAS</Heading>
                        <p className="max-w-xl leading-7 text-muted/80">Creamos prendas que van más allá de ser visualmente atractivas, están diseñadas con conciencia ecológica para ser funcionales, personales y un reflejo auténtico de tu estilo de vida. Cada colección que desarrollamos equilibra creatividad y responsabilidad, asegurando que cada pieza no solo luzca increíble, sino que también aporte un propósito sostenible en tu día a día.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
