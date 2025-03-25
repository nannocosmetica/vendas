import { Bubble } from "./Bubble";

export const TestimonialsSection = () => {
  return (
    <section className="w-full bg-neutral-200">
      <h2 className="uppercase px-4 mt-20 w-full text-center mb-4" id="about">
          O que nossos <span className="text-pink-700">Clientes</span> dizem
      </h2>
      <div className="w-full text-center"><span className="text-neutral-500 text-lg">Depoimentos reais, clique e comprove!</span></div>
      <div id="testimonials" className="bg-neutral-200 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-24 py-20">
        <Bubble icon="/feedback/giovanna.jpg" text="Como distribuidora afirmo, melhor marca que já trabalhei, suporte incrível." title="Giovanna Nunes" url="https://www.facebook.com/nannocosmetica/posts/1074411094727685"/>
        <Bubble icon="/feedback/marli.jpg" text="Super recomendo!!!" title="Marli Kelly" url="https://www.facebook.com/nannocosmetica/posts/pfbid0384jzSAakAxS6TnjK1T6FFaXseakzzLfvC3fdWG6RRYrpVnJh4MnVtxCbH6iBAkYKl" />
        <Bubble icon="/feedback/rosalia.jpg" text="Amo os Produtos da Nanno são Maravilhosos!❤️🙌" title="Rosalia" url="https://www.instagram.com/p/DBem-cPyhao/?img_index=1"/>
        <Bubble icon="/feedback/cinira.jpg" text="Nanno sensacional não deixa a desejar para nenhuma outra marca qualidade maravilhosa" title="Cinira" url="https://www.instagram.com/p/C6wCJmJLEv4/" />
      </div>
    </section>
  );
};
