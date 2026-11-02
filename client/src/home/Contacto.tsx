import Heading from "../components/Headings"
import flecha from "/eventos/flecha.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import{
    faFacebook, faInstagram, faYoutube, faTiktok, faXTwitter} from "@fortawesome/free-brands-svg-icons"


export const Contacto = () => {
    return (
       
      <footer className="bg-[rgba(52,36,28,1)] text-white pt-20 pb-12">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-16">

   
    <div className="space-y-10">
      <div className="flex items-center gap-3">
        
        <div className="font-bold text-2xl tracking-wide">SOLARA</div>
      </div>

      <div className="grid grid-cols-2 gap-16">
        <div>
          <Heading level={4} className="text-sm font-semibold text-white95 uppercase tracking-wide mb-4">Quick Links</Heading>
          <ul className="text-sm text-white/90 space-y-3">
            <li><a href="#" className="hover:text-[#7b4d29]">Home</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Our Services</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Projects</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">About Us</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Blog</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Contact</a></li>
          </ul>
        </div>

        <div className="ml-15">
          <Heading level={4} className="text-sm font-semibold text-white/95 uppercase tracking-wide mb-4">Company</Heading>
          <ul className="text-sm text-white/90 space-y-3">
            <li><a href="#" className="hover:text-[#7b4d29]">Home</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Our Services</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Projects</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">About Us</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Blog</a></li>
            <li><a href="#" className="hover:text-[#7b4d29]">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="group size-10 flex items-center justify-center rounded-lg 
                 transition-all duration-300 hover:border-white hover:bg-white/80 ">
        <FontAwesomeIcon icon={faFacebook} className="text-lg text-white/80 group-hover:text-black/80"/>
        </div>
        <div className="group size-10 flex items-center justify-center rounded-lg 
                 transition-all duration-300 hover:border-white hover:bg-white/80 ">
        <FontAwesomeIcon icon={faXTwitter} className="text-lg text-white/80 group-hover:text-black/80" />
        </div>
        <div className="group size-10 flex items-center justify-center rounded-lg 
                 transition-all duration-300 hover:border-white hover:bg-white/80 ">
        <FontAwesomeIcon icon={faInstagram} className="text-lg text-white/80 group-hover:text-black/80" />
        </div>
        <div className="group size-10 flex items-center justify-center rounded-lg 
                 transition-all duration-300 hover:border-white hover:bg-white/80 ">
        <FontAwesomeIcon icon={faYoutube} className="text-lg text-white/80 group-hover:text-black/80" />
        </div>
        <div className="group size-10 flex items-center justify-center rounded-lg 
                 transition-all duration-300 hover:border-white hover:bg-white/80 ">
        <FontAwesomeIcon icon={faTiktok} className="text-lg text-white/80 group-hover:text-black/80" />
        </div>
      </div>
    </div>

    
    <div className="flex justify-between items-start gap-40">
      <div>
        <Heading level={2} className="text-4xl md:text-5xl font-normal">GET IN TOUCH</Heading>

        <div className="mt-8 space-y-6">
          <div>
            <div className="text-sm uppercase text-white/50 mb-1">Email</div>
            <Heading level={4} className="text-lg font-semibold tracking-wide">CONTACT@SOLARA.COM</Heading>
          </div>

          <div>
            <div className="text-sm uppercase text-white/50 mb-1">Phone</div>
            <Heading level={4} className="text-lg font-semibold tracking-wide">+51 333 9296</Heading>
          </div>

          <div>
            <div className="text-sm uppercase text-white/50 mb-1">Office Location</div>
            <Heading level={4} className="text-lg font-semibold tracking-wide">Av. Camino Real 710, san isidro</Heading>
          </div>
        </div>
      </div>

      <div className="hidden md:block" aria-hidden>
        <img src={flecha} alt="" className="w-14 h-14 opacity-70 ml-15" />
      </div>
    </div>

  </div>
</footer>
    
    )
}
