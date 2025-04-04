import { FaAngleUp } from "react-icons/fa";

export const ScrollToTop = () => {
  return (
    <div className="bg-neutral-500 text-white rounded-full fixed bottom-4 right-4" aria-label="Scroll to top">
      <a href="#top">
        <FaAngleUp size={38} />
      </a>
    </div>
  );
};
