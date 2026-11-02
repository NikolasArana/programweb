import Heading from "../components/Headings"
import slide0 from "../assets/banner/baner2.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Testimonios = () => {
  return (
    <figure className="relative w-full h-64 md:h-144 overflow-hidden ">
      <img src={slide0} alt="banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 z-10 flex justify-between  text-white px-3 mx-auto max-w-7xl">
        
        <div className="pt-35">

          <p className="font-medium  text-2xl">TESTIMONIALS</p>
        </div>
        <div className="flex flex-col justify-center">
          <div>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          </div>
          <Heading level={3} className="text-white text-base max-w-2xl font-medium mt-2">SUS PRENDAS SON CÓMODAS, CON ESTILO SURFER Y ADEMÁS 100% RECICLADAS. ES ROPA QUE REFLEJA MI PERSONALIDAD Y MI FORMA DE VIVIR.</Heading>
          <div className="mt-4">Nikolas A.,Peru</div>
        </div>
        </div>
      

    </figure>
  )
}
