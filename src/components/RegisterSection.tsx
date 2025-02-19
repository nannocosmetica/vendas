import { useEffect, useRef } from "react";

export const RegisterSection = () => {
  const scriptContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Criando o primeiro script inline
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      !function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1437124",hash:"fdbbb42a576edd80d80f24a2dadbdd5a",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");
    `;

    // Criando o segundo script externo
    const externalScript = document.createElement("script");
    externalScript.id = "amoforms_script_1437124";
    externalScript.src = "https://forms.kommo.com/forms/assets/js/amoforms.js?1739977547";
    externalScript.async = true;
    externalScript.charset = "utf-8";

    // Adicionando os scripts ao contêiner
    if (scriptContainerRef.current) {
      scriptContainerRef.current.appendChild(inlineScript);
      scriptContainerRef.current.appendChild(externalScript);
    }

    // Limpeza: Removendo scripts quando o componente for desmontado
    return () => {
      if (scriptContainerRef.current) {
        scriptContainerRef.current.innerHTML = ""; // Remove os scripts inseridos
      }
    };
  }, []);

  return (
    <section className="flex flex-1 flex-col items-center justify-center text-center" id="reg">
      <h2 className="my-20 px-4">
        <span className="text-pink-700">Cadastre-se</span> e entraremos em contato com você!
      </h2>
      <div ref={scriptContainerRef} className="w-full lg:w-8/12 flex justify-center"></div>
    </section>
  );
};
