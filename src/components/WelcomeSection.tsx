import { FaAngleRight } from "react-icons/fa";

export const WelcomeSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-x-32 pl-0 lg:pl-24">
      <div className="flex-1 px-4 lg:px-0">
        <h4 className="uppercase text-center md:text-left mb-4 md:mb-0">
          Produtos exclusivos para <b className="text-pink-700">profissionais</b>.
        </h4>
        <p className="text-2xl md:text-6xl font-bold text-center md:text-left leading-tight">
          Já pensou em ter uma renda de <b>10 mil reais</b> distribuindo cosméticos profissionais?
        </p>
        <div className="bg-pink-700 h-1 rounded-full my-8 md:w-6/12"></div>
        <p className="text-justify mb-4">Há mais de 20 anos no mercado brasileiro, nossa missão é fornecer produtos de qualidade com alta rentabilidade.</p>
        <div className="flex w-full justify-center">
          <img src="/box8.webp" loading="lazy" alt="Kit Box 8 Nanno" className="w-8/12" />
        </div>
        <a href="#reg" className="flex flex-nowrap my-10 lg:w-6/12 items-center font-bold border-2 border-pink-700 text-pink-700 rounded-full px-8 py-2 hover:bg-pink-700 hover:text-white transition-colors">
          <div>
            <span className="whitespace-nowrap">Revender Nanno</span>
          </div>
          <div className="flex w-full justify-end">
            <FaAngleRight size={28} />
          </div>
        </a>
      </div>

      <div className="flex-1">
        <picture>
          <source media="(min-width: 768px)" srcSet="/hairmodel3.webp" type="image/webp" />
          <img src="/hairmodel3mobile.webp" alt="Lindos Cabelos Ruivos" className="max-w-full h-auto object-contain z-10" />
        </picture>
      </div>
    </section>
  );
};
