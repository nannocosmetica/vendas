import { IoMenu } from "react-icons/io5";

export const Header = () => {
  return (
    <header className="flex w-full items-center h-16 px-4 lg:pl-24 mt-4 mb-10">
      <a href="#">
        <img src="/logo.png" alt="Logo Nanno" className="w-[150px] min-w-[150px]" id="logo"/>
      </a>
      <ul className="lg:flex flex-1 justify-end gap-x-4 hidden whitespace-nowrap">
        <li className="transition-transform hover:scale-105">
          <a href="#about">SOBRE NÓS</a>
        </li>
        <li className="transition-transform hover:scale-105">
          <a href="#testimonials">DEPOIMENTOS</a>
        </li>
        <li className="transition-transform hover:scale-105">
          <a href="#reg">CADASTRE-SE</a>
        </li>
        <li className="transition-transform hover:scale-105">
          <a href="">PERGUNTAS FREQUENTES</a>
        </li>
        <li className="transition-transform hover:scale-105">
          <a href="">CONTATO</a>
        </li>
      </ul>
      <div className="lg:hidden flex flex-1 justify-end items-center">
        <a href="#">
          <IoMenu size={32} />
        </a>
      </div>
    </header>
  );
};
