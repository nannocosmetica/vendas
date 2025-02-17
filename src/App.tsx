import { SocialNetwork } from "./components/SocialNetwork";
import { Header } from "./components/Header";
import { WelcomeSection } from "./components/WelcomeSection";
import { FaMoneyBill } from "react-icons/fa";
import { Bubble } from "./components/Bubble";

function App() {
  return (
    <>
      <div className="flex w-full min-h-screen">
        <aside className="hidden md:flex w-1/12">
          <SocialNetwork />
        </aside>
        <div className="flex flex-col flex-1 pt-20">
          <Header />
          <WelcomeSection />
          <div className="flex w-full gap-x-24 px-16 mt-8">
            <Bubble icon={<FaMoneyBill size={38} />} text="Dolor sit amet" title="Loren Ipson" />
            <Bubble icon={<FaMoneyBill size={38} />} text="Dolor sit amet" title="Loren Ipson" />
            <Bubble icon={<FaMoneyBill size={38} />} text="Dolor sit amet" title="Loren Ipson" />
          </div>
          <section className="h-96 flex items-center">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</section>
        </div>

        {/* 
        <section className="flex flex-col h-96 items-center justify-center">
          <div className="px-8 md:px-64 text-justify md:text-center mb-16">
            <span className="text-2xl">
              Estamos presentes em <b>1500+</b> salões em todo o país e mais de <b>100</b> distribuidores já aumentaram suas rendas com os cosméticos <b>Profissionais da Nanno.</b>
            </span>
          </div>
        </section>
        <section className="flex flex-col h-96 items-center justify-center">
          <h1 className="text-4xl uppercase mb-8">
            Sobre a <b>Nanno</b>
          </h1>
          <div className="md:px-64 text-justify md:text-center flex flex-col md:flex-row px-4 gap-x-16 gap-y-6">
            <span className="flex flex-1 text-justify">Somos uma empresa especializada na área de cosméticos, com foco no desenvolvimento de produtos capilares profissionais. Desejamos suprir todas as necessidades do mercado, dos desafios que você encontra dentro de casa, ao salão de beleza. Não só isso, mas ansiamos por ajudar aqueles que não tem medo de sonhar e querem fazer parte desse ramo, terceirizando sua produção para que você também consiga crescer nessa categoria que nós amamos fazer parte!</span>
            <span className="flex flex-1">
              <iframe className="w-full" width="560" height="315" src="https://www.youtube.com/embed/ijvFRGtdXWI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </span>
          </div>
        </section> */}
      </div>
    </>
  );
}

export default App;
