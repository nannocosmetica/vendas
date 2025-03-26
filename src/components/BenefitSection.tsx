export const BenefitSection = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <p className="w-10/12 lg:w-6/12 text-center text-2xl italic mt-16 lg:mt-32">
        Revender Nanno é a oportunidade perfeita para quem busca <b>independência financeira</b> com produtos de altíssima qualidade e grande aceitação no mercado. Com uma margem de lucro que pode chegar de 100% a 120%, nossos revendedores têm uma excelente oportunidade de crescimento.
      </p>
      <div className="w-8/12 lg:w-4/12 h-[2px] rounded-full my-16 bg-neutral-300"></div>
      <p className="w-10/12 lg:w-6/12 text-justify">
        Oferecemos suporte e acompanhamento individualizado, garantindo que você tenha todo o conhecimento e material necessário para impulsionar suas vendas. Além disso nossos produtos são desenvolvidos com tecnologia avançada e resultados comprovados, o que torna fácil a aceitação em salões e entre profissionais da beleza.
      </p>
      <div className="w-10/12 lg:w-6/12 mt-16">
        <p className="mb-4">Vantagens de ser um revendedor <b>Nanno:</b></p>
        <div className="bg-neutral-100 rounded-xl p-10 lg:p-16">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 list-disc">
            <li>Lucros de até 120%</li>
            <li>Produtos de alta qualidade e fácil revenda</li>
            <li>Suporte e treinamento exclusivos</li>
            <li>Oportunidade de expansão e crescimento</li>
          </ul>
        </div>
        <p className="text-center my-10">Quer fazer parte do nosso time e conquistar seu espaço no mercado da beleza? Preencha o formulário abaixo e entraremos em contato com você!</p>
      </div>
    </div>
  );
};