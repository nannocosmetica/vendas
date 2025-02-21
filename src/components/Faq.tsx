import { FaqItem } from "./FaqItem";

export const FaqSection = () => {
  return (
    <section className="flex flex-col justify-center w-full">
      <h2 className="text-center my-20">Perguntas Frequentes</h2>
      <div className="grid grid-cols-2 w-8/12 gap-4 mx-auto">
        <FaqItem title="Pergunta frequente aqui.">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</FaqItem>
        <FaqItem title="Pergunta frequente aqui.">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</FaqItem>
      </div>
    </section>
  );
};
