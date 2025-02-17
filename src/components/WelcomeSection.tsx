export const WelcomeSection = () => {
  return (
    <section className="flex flex-col w-full">
      <div className="flex w-full">
        <div className="flex flex-1 flex-col">
          <div className="">
            <h4 className="uppercase text-xl">
              Produtos exclusivos para <b className="text-pink-700">profissionais</b>.
            </h4>
            <p className="text-6xl font-bold text-left leading-tight">
              Já pensou em distribuir <br /> uma marca consolidada <br />e completa?
            </p>
          </div>
          <div className="bg-pink-700 h-2 rounded-full my-8 w-6/12"></div>
          <span className="mb-8">
            Há mais de 20 anos no mercado brasileiro, nossa missão é <br />
            fornecer produtos de qualidade com alta rentabilidade.
          </span>
          <div className="flex flex-col w-full text-justify">
            <img src="/public/box8.png" alt="Kit Box 8 Nanno" className="w-10/12" />
          </div>
        </div>
        <div className="flex-1">
          <img src="/hairmodel2.png" className="max-w-full h-auto object-contain z-10" alt="Lindos Cabelos Ruivos" />
        </div>
      </div>
    </section>
  );
};
