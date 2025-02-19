import { SocialNetwork } from "./components/SocialNetwork";
import { Header } from "./components/Header";
import { WelcomeSection } from "./components/WelcomeSection";
import { Bubble } from "./components/Bubble";
import { IoTrendingUp } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { AboutSection } from "./components/AboutSection";
import { RegisterSection } from "./components/RegisterSection";
import { FaRegThumbsUp } from "react-icons/fa";

function App() {
  return (
    <>
      <SocialNetwork />
      <div className="flex flex-col w-auto min-h-screen" id="top">

        <div className="flex flex-col w-full">
          <div className="flex flex-col flex-1">
            <Header />
            <WelcomeSection />

            <div className="flex flex-col lg:flex-row w-full gap-x-6 lg:gap-x-8 gap-y-8 px-4 md:px-32 my-20 lg:pl-24 lg:pr-4">
              <Bubble icon={<GiReceiveMoney size={42} />} text="Com o investimento inicial de apenas R$3.000 você pode faturar até R$7.000 com as vendas." title="Custo x Benefício" />
              <Bubble icon={<IoTrendingUp size={42} />} text="O Mercado de cosméticos capilares profissionais cresce a cada dia!" title="Mercado em Crescimento" />
              <Bubble icon={<FaRegThumbsUp size={36} />} text="Temos benefícios exclusivos para distribuidores, como por exemplo, material de apoio e treinamentos especiais." title="Benefícios Exclusivos" />
            </div>
          </div>
        </div>

        <AboutSection />

        <TestimonialsSection />

        <RegisterSection />

        <Footer />
        
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
