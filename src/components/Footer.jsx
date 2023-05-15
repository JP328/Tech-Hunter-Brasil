import { FaPaperPlane, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp, SiInstagram, SiGmail } from "react-icons/si";


function Footer() {
  return (
    <div className="w-full h-full">
      <div className="bg-waves h-96 aspect-960/540 w-full bg-no-repeat bg-center bg-cover rotate-180"/>
      <footer className="w-full min-h-[20rem] h- max-h-full bg-Mviolet flex flex-col justify-between text-slate-200">
        <div className="w-full h-5/6 max-lg:h-60 max-md:h-48 flex max-lg:flex-col justify-around max-lg:justify-between items-center">
          <div className="w-1/3 max-lg:w-4/5 flex justify-between max-lg:justify-evenly text-4xl max-md:text-3xl duration-200">
            <a href="https://t.me/techhunterbrasil" target="_blank" rel="noreferrer">
              <FaPaperPlane className="cursor-pointer hover:text-cyan-600"/>                
            </a>
            <a href="https://api.whatsapp.com/send?phone=5511984931736" target="_blank" rel="noreferrer">
              <SiWhatsapp className="cursor-pointer hover:text-green-600"/>
            </a>
            <a href="https://www.linkedin.com/company/tech-hunter-brasil/mycompany/" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="cursor-pointer hover:text-sky-700"/>
            </a>
            <a href="https://www.instagram.com/techunterbrasil/" target="_blank" rel="noreferrer">
              <SiInstagram className="cursor-pointer hover:text-rose-500"/>
            </a>
            <a href="mailto:techunterbrasil@gmail.com" target="_blank" rel="noreferrer">
              <SiGmail className="cursor-pointer hover:text-red-600"/>
            </a>
          </div>
          <div className="w-2/5 max-lg:w-full flex justify-between max-lg:justify-around items-center"> 
            <img src="/Sao_Judas.png" alt="Logo da Universidade São Judas" className="w-3/5 max-lg:w-1/3" />
            <img src="/ecossistema-anima.png" alt="Logo do Ecossitema Ânima" className="w-2/5 max-lg:w-1/4" />
          </div>
        </div>
        <p className="text-lg max-md:text-base text-center mb-4 max-sm:mx-4">
          ©2023 Tech Hunter Brasil. Todos os direitos reservados.
        </p>
      </footer>

    </div>
  )
}

export default Footer;