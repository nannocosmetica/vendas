import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-800 text-white px-4 py-6">
      <div className="w-full flex px-4 md:px-16 flex-col md:flex-row items-center">
        <div className="flex-1 text-left text-sm">
          <p className="mb-2 flex flex-row gap-x-2"><span className="pt-1"><FaLocationDot size={20} /></span> <span>Estrada Adam Blummer, Nº 8735 - Jardim Gandé, Magé - RJ, CEP: 25914-213</span></p>
          <p className="mb-4 flex flex-row gap-x-2"><span className="pt-1"><FaSquarePhone size={20} /></span> (21) 99906-1608 | (21) 3632-0232 | (21) 2010-7185 <br /> sac@nannocosmetica.com.br</p>
          <p className="text-center md:text-left"> © {currentYear} <b>Nanno Cosmética</b>. Todos os direitos reservados.</p>
        </div>
        <div className="flex-1 flex md:justify-end w-full items-center gap-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/nannocosmetica"
            className="hover:text-blue-500 hover:scale-110 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={22} />
          </a>
          <a
            href="https://www.instagram.com/nannocosmetica/"
            className="hover:text-blue-500 hover:scale-110 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/NannoCosmetica"
            className="hover:text-blue-500 hover:scale-110 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
