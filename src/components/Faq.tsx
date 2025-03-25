import { FaqItem } from "./FaqItem";

export const FaqSection = () => {
  return (
    <section className="flex flex-col justify-center w-full mb-24" id="faq">
      <h2 className="text-center my-20">Perguntas Frequentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:w-8/12 md:gap-x-8 gap-y-12 mx-auto px-4">
        <FaqItem title="Qual a base (Fundo de pigmento) das colorações?">Todas as coloração tem como base (fundo) AZUL/VIOLETA.</FaqItem>
        <FaqItem title="Como faço para ser um distribuidor?">É muito fácil, basta preencher o formulário nessa pagina que nossos consultores vaõ entrar em contato com você!</FaqItem>
        <FaqItem title="Qual o site oficial da empresa?"><a href="https://nannocosmetica.com.br" target="_blank" rel="noopener noreferrer">www.nannocosmetica.com.br</a></FaqItem>
        <FaqItem title="Vocês vende os produtos na internet?">Não! Nossos produtos são exclusivos para salões de beleza e uso profissional. Por isso não vendemos nossos produtos em sites, marketplaces, perfumarias e afins.</FaqItem>
        <FaqItem title="Qual o investimento minímo da primeira compra?">O investimento inicial para a distribuição é de <b>R$3.000,00</b></FaqItem>
        <FaqItem title="Qual a margem de lucratividade?">A margem de lucratividade da distribuição dos produtos varia de 100% a 120%.</FaqItem>
      </div>
    </section>
  );
};
