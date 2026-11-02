import Heading from "../components/Headings"
import persona from "../assets/fundadores/persona.png"
import ceo from "../assets/fundadores/ceo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook, faInstagram, faXTwitter
} from "@fortawesome/free-brands-svg-icons"


export const Equipo = () => {
  return (

    <section className='bg-[rgba(240,235,229,1)] pb-20  '>
      <div className="flex max-w-7xl items-center justify-between mx-auto">

        <div className="flex gap-0">
          <div className="w-72 h-82 shrink-0">
            <img src={persona} alt="" className="w-full h-full object-cover " />
          </div>
          <div className="bg-white w-82 h-82 flex flex-col justify-center items-center text-center px-8">
            <Heading level={3} className=" text-muted font-normal">MATEO LARENZI</Heading>
            <div className="mt-2 text-muted">Diseñador</div>
            <div className="flex gap-2 mt-4">
              <div><FontAwesomeIcon icon={faFacebook} className="mb-3 text-xl  p-2.5 text-muted" /></div>
              <div><FontAwesomeIcon icon={faXTwitter} className="mb-3 text-xl  p-2.5 text-muted" /></div>
              <div><FontAwesomeIcon icon={faInstagram} className="mb-3 text-xl  p-2.5 text-muted" /></div>
            </div>
          </div>
        </div>

        <div className="flex gap-0">
          <div className="w-72 h-82 shrink-0">
            <img src={ceo} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="bg-white w-82 h-82 flex flex-col justify-center items-center text-center px-8">
            <Heading level={3} className=" text-muted font-normal">LUCA ARDANELLI</Heading>
            <div className="mt-2 text-muted">CEO</div>
            <div className="flex gap-2 mt-4">
              <div><FontAwesomeIcon icon={faFacebook} className="mb-3 text-xl  p-2.5 text-muted" /></div>
              <div><FontAwesomeIcon icon={faXTwitter} className="mb-3 text-xl  p-2.5 text-muted" /></div>
              <div><FontAwesomeIcon icon={faInstagram} className="mb-3 text-xl  p-2.5 text-muted" /></div>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
