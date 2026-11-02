import slide0 from "../assets/banner/baner3.webp"
import Heading from "../components/Headings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{
    faChevronRight} from "@fortawesome/free-solid-svg-icons"


export const Banner = () => {
  return (
    <figure className="relative w-full h-64 md:h-120 overflow-hidden ">
      <img src={slide0} alt="banner" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 z-10 items-center flex text-white justify-between px-3 mx-auto max-w-7xl">
        <div>
          <Heading level={1} className=" text-white font-normal">ABOUT US</Heading>
          <p className="font-bold text-lg">Home  <FontAwesomeIcon icon={faChevronRight} className="text-xs"/>  About Us</p>
        </div>

        <div className="text-white/85 text-base max-w-sm font-bold">Creamos ropa juvenil inspirada en el surf que mezcla libertad, energía y esencia costera. Cada prenda está pensada para reflejar aventura y expresar tu estilo único.</div>

      </div>

    </figure>
  )
}
