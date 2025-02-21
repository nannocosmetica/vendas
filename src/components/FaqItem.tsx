import clsx from "clsx";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

interface IFaqItemProps {
  title: string;
  children: string | React.ReactNode;
}

export const FaqItem = ({ children, title }: IFaqItemProps) => {
  const [faqToggle, setFaqToggle] = useState(false);

  return (
    <div>
      <div className="flex items-center hover:cursor-pointer" onClick={() => setFaqToggle(!faqToggle)}>
        {faqToggle ? <IoIosClose size={28} className="font-bold" color={"#c6005c"} /> : <FaCaretRight size={24} color={"#c6005c"} />}
        <span className="faq-title">{title}</span>
      </div>
      <p className={clsx({ "h-auto": faqToggle }, "h-0 pl-8 mt-2 overflow-y-hidden transition-all text-justify")}>{children}</p>
    </div>
  );
};
