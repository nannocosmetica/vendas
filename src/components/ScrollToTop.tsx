import { FaAngleUp } from "react-icons/fa";

export const ScrollToTop = () => {
  return (
    <div className="bg-neutral-500 text-white rounded-full fixed bottom-4 right-4">
      <a href="#top" aria-label="Subir para o topo da página">
        <FaAngleUp size={38} />
      </a>
    </div>
  );
};
