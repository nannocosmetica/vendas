import Form from "./Form";

export const RegisterSection = () => {

  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center" id="reg">
      <h2 className="px-4 my-20">
        <span className="text-pink-700">Cadastre-se</span> e entraremos em contato com você!
      </h2>
      <div className="w-full flex justify-center"><Form /></div>
    </section>
  );
};
