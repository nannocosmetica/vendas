import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="flex w-full flex-col lg:flex-row lg:justify-between items-center px-4 lg:px-24 mt-4 mb-10">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <a href="#">
          <img
            src="/logo.png"
            alt="Logo Nanno"
            className="w-[150px] min-w-[150px]"
            id="logo"
          />
        </a>
        <div className="lg:hidden flex justify-end items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MobileMenu />
          </button>
        </div>
      </div>
      <ul
        className={`w-full lg:flex flex-col lg:flex-row gap-4 lg:gap-8 transition-all duration-300 overflow-hidden justify-end ${
          menuOpen ? "h-auto py-4 bg-neutral-100 rounded-lg px-4 space-y-4" : "h-0 space-y-0"
        } lg:h-auto lg:py-0 lg:bg-transparent lg:rounded-none lg:px-0`}
      >
        <li className="transition-transform hover:scale-105 whitespace-nowrap">
          <a href="#about" onClick={handleLinkClick}>SOBRE NÓS</a>
        </li>
        <li className="transition-transform hover:scale-105 whitespace-nowrap">
          <a href="#testimonials" onClick={handleLinkClick}>DEPOIMENTOS</a>
        </li>
        <li className="transition-transform hover:scale-105 whitespace-nowrap">
          <a href="#benefits" onClick={handleLinkClick}>BENEFÍCIOS</a>
        </li>
        <li className="transition-transform hover:scale-105 whitespace-nowrap">
          <a href="#reg" onClick={handleLinkClick}>CADASTRE-SE</a>
        </li>
        <li className="transition-transform hover:scale-105 whitespace-nowrap pr-2">
          <a href="#faq" onClick={handleLinkClick}>DÚVIDAS</a>
        </li>
      </ul>
    </header>
  );
};
