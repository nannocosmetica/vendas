export const AboutSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center mb-38" id="about">
        <h2 className="uppercase px-4 mt-20">
          Sobre a <span className="text-pink-700">Nanno</span>
        </h2>
        <div className="md:w-8/12 text-center mb-20 px-4">
          <p className="pb-16 italic">Uma empresa séria com mais de 20 anos de experiencia no mercado cosmético.</p>
          <p className="text-2xl">
            Estamos presentes em <b>1500+</b> salões em todo o país e mais de <b>100</b> distribuidores já aumentaram suas rendas com os <b>Cosméticos Profissionais da Nanno.</b>
          </p>
        </div>
        <div className="text-justify md:text-center flex flex-col-reverse lg:flex-row gap-x-16 gap-y-6 lg:w-10/12">
          <div className="flex-1">
            <p className="text-justify px-8">
              Desde <b>2002</b> no mercado nacional de cosméticos e queremos compartilhar com você a nossa experiência para ajudar no seu crescimento financeiro através do fornecimento de cosméticos de alta qualidade.
            </p>
            <br />
            <p className="text-justify px-8">Somos uma empresa especializada na área de cosméticos capilares profissionais, com foco no desenvolvimento de produtos que ajudam a suprir todas as necessidades e desafios que você encontra dentro do salão de beleza. Não só isso, mas ansiamos por ajudar aqueles que não tem medo de sonhar, então queremos ajudar você a crescer nessa categoria que nós amamos fazer parte!</p>
          </div>
          <span className="flex-1">
            <iframe className="w-full" width="520" height="380" src="https://www.youtube.com/embed/ijvFRGtdXWI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </span>
        </div>
      </section>
    </>
  );
};
