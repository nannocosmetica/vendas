export const Header = () => {
  return (
    <header className="flex w-full items-center h-16 gap-x-24 mb-16">
      <div>
        <a href="#"><img src="/logo.png" alt="Logo Nanno" className="w-[150px] min-w-[150px]" /></a>
      </div>
        <ul className="flex w-full gap-x-8 font-bold">
          <li>
            <a href="">SOBRE NÓS</a>
          </li>
          <li>
            <a href="">BENEFÍCIOS</a>
          </li>
          <li>
            <a href="">DEPOIMENTOS</a>
          </li>
          <li>
            <a href="">CADASTRE</a>-SE
          </li>
          <li>
            <a href="">PERGUNTAS FREQUENTES</a>
          </li>
          <li>
            <a href="">CONTATO</a>
          </li>
        </ul>
    </header>
  );
};
