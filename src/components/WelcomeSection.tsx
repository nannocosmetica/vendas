export const WelcomeSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-x-32 pl-0 lg:pl-24">

        <div className="flex-1 px-4 lg:px-0">
          <h4 className="uppercase text-center md:text-left mb-4 md:mb-0">
            Produtos exclusivos para <b className="text-pink-700">profissionais</b>.
          </h4>
          <p className="text-2xl md:text-6xl font-bold text-center md:text-left leading-tight">
            Já pensou em distribuir uma marca consolidada e completa?
          </p>
          <div className="bg-pink-700 h-1 rounded-full my-8 md:w-6/12"></div>
          <p className="text-justify mb-4">
            Há mais de 20 anos no mercado brasileiro, nossa missão é
            fornecer produtos de qualidade com alta rentabilidade.
          </p>
          <img src="/public/box8.png" alt="Kit Box 8 Nanno" className="" />
        </div>

        <div className="flex-1">
          <img src="/hairmodel3.png" className="max-w-full h-auto object-contain z-10" alt="Lindos Cabelos Ruivos" />
        </div>

    </section>
  );
};
