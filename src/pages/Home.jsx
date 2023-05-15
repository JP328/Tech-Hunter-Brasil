import { useRef } from 'react'
import { BsChevronDoubleDown } from "react-icons/bs";
import Modal from "../components/Modal";
import { useSelector } from 'react-redux';

function Home() {

  const isModalOpen = useSelector((state) => {
    return state.modal.menuModal;
  })

  const aboutSection = useRef();

  const moveToSection = (section) => {
    section.current.scrollIntoView({behavior: "smooth", block: "center"});
  }

  return (
    <div className="bg-white font-notoSans w-full h-full overflow-x-hidden flex flex-col justify-center items-center">

      <div className="bg-home w-full h-screen bg-no-repeat bg-center bg-cover"> 
        <div className="w-full h-full flex flex-col justify-center items-center text-slate-200 bg-gradient-to-t from-Mviolet to-Mbege/80">
          <div className="w-3/4 h-full flex flex-col justify-evenly items-center mt-16 md:px-14">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl max-md:text-3xl text-center">
              Conecta quem procura oportunidades com quem procura talentos!
            </h1>
            <p className="max-md:text-sm text-xl text-center">
              Venha fazer a diferença e contribuir em conjunto com empresas, para disseminar conhecimento, ampliar oportunidades e dar uma chance a quem precisa.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkqNsiJhRSjOn0C7phudA2x0a4rHH6kInI4xO5EkYYCm_EmA/viewform"
              className="max-md:w-full w-1/3 text-2xl text-center font-semibold border-solid border-2 border-white hover:border-Mpink hover:text-Mpink py-1"
            >
              Increva-se!
            </a> 

            <button 
              onClick={() => moveToSection(aboutSection)} 
              className="text-3xl animate-bounce hover:border-Mpink hover:text-Mpink mt-4"
            > 
              <BsChevronDoubleDown/>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-waves h-96 aspect-960/540 w-full bg-no-repeat bg-center bg-cover"/>
      
      <section 
        ref={aboutSection} 
        className="w-full h-full flex max-md:flex-col justify-center items-center px-4 bg-line-background aspect-900/600 bg-no-repeat bg-center bg-cover"
      >

        <h2 className="md:w-4/5 w-full xl:text-9xl lg:text-8xl md:text-7xl text-3xl font-medium max-md:text-center max-md:my-4 lg:px-14 md:pl-8">
          O que é o Tech Hunter Brasil?
        </h2>
        <p className="w-4/5 md:w-2/3 xl:text-2xl lg:text-xl max-md:text-base font-medium text-justify mr-4">
          O Tech Hunter é um projeto de extensão que tem como objetivo auxiliar as pessoas que procuram oportunidades na área de TI e as empresas de todos os tamanhos que precisam de profissionais, porém tem dificuldades em encontrá-los no mercado atual. Conectamos quem busca talentos com quem busca oportunidades.
          <br/>
          De um lado, quem precisa de uma chance e tem potencial para se desenvolver ou precisa de uma oportunidade para atuar com tecnologia e em carreiras digitais.
          <br/>
          Do outro lado, empresas e startups com um déficit gigante de mão de obra qualificada e que procuram talentos nesta área.
          <br/>
          O Tech Hunter Brasil une forças e conecta necessidades e interesses para construir um país melhor através da educação e tecnologia.
        </p>
      </section>

      <section className="h-full w-full my-14 text-center flex flex-col items-center">

        <h2 className="w-1/2 max-lg:w-4/5 h-[12%] my-16 xl:text-4xl md:text-2xl text-xl text-white relative isolate after:content-[''] after:bg-gradient-to-r after:from-purple-800 after:to-Mbege after:absolute after:-z-[1] after:inset-0 after:-top-5 after:-bottom-4  after:skew-y-1">
          Quem pode participar e contribuir?
        </h2>
        <div className='h-fit md:text-xl text-base text-justify flex flex-col gap-6 items-start px-10'>
          <p><strong>Representantes de empresas e startups que contratam:</strong> Organizações que demandam profissionais.</p>
          
          <p><strong>Profissionais de recrutamento:</strong> Profissionais especializados em processos seletivos e contratações.</p>
          
          <p><strong>Estudantes de diversas áreas:</strong> Tecnologia, Engenharia, Design, Comunicação e Arte, Direito, Pedagogia, Psicologia, Gestão, e demais áreas que possam contribuir para a proposta de uma solução, além de iniciativas para promover, apoiar e potencializar as contratações pelas empresas.</p>
          
          <p><strong>Representantes de capacitação em tecnologia e carreiras digitais:</strong> Envolvidos com soluções de capacitação de profissionais da área de tecnologia.</p>
          
          <p><strong>Representantes e líderes da área:</strong> Pessoas influentes e que estão envolvidas com as comunidades e área de tecnologia e com a colaboração para o desenvolvimento do país e com redução dos gaps existentes.</p>
        </div>
      </section>

      <section 
        className="h-full w-full my-14 text-center flex flex-col items-center">
        <h2 
          className="w-3/5 max-lg:w-4/5 h-[12%] my-16 xl:text-4xl md:text-2xl text-xl text-white relative isolate after:content-[''] after:bg-gradient-to-r after:from-purple-800 after:to-Mbege after:absolute after:-z-[1] after:inset-0 after:-top-6 after:-bottom-3 after:-skew-y-1">
            Como você pode participar e contribuir?
        </h2>
        <div className='h-3/5 md:text-lg text-base text-justify flex flex-col md:px-20 max-md:px-10 gap-8 items-start'>
          <p>
            Se você quer contribuir  e também atua para ampliar as oportunidades na área de tecnologia e diminuir os gaps de raça,  gênero e classe social existentes, faça 
            <a href="https://www.linkedin.com/company/tech-hunter-brasil/mycompany/" className='text-blue-800 decoration-blue-800 underline'> contato conosco</a>!  
          </p>
          <p>
            Se você ou sua empresa busca talentos na área de tecnologia e tem interesse em se conectar com pessoas que estão buscando oportunidades, venha conosco venha conosco! Saiba mais na página Busco talentos!  
          </p>
          <p>
            Se você tem vontade de se desenvolver e busca ampliar suas possibilidades e oportunidades, tanto na área de tecnologia quanto nas possibilidade que a área provê, não perca esta chance! Saiba mais na página Busco oportunidades!
          </p>
        </div>
      </section>

      {isModalOpen && <Modal/>}
    </div>
  )
}

export default Home;