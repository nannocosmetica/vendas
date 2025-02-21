import { useEffect, useRef } from "react";

const Form = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Evita carregar o script mais de uma vez
    if (document.getElementById("amoforms_script_1437124")) return;

    // Cria o script de configuração
    const script1 = document.createElement("script");
    script1.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1437124",hash:"fdbbb42a576edd80d80f24a2dadbdd5a",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

    // Cria o script externo para carregar o formulário
    const script2 = document.createElement("script");
    script2.id = "amoforms_script_1437124";
    script2.async = true;
    script2.charset = "utf-8";
    script2.src = "https://forms.kommo.com/forms/assets/js/amoforms.js?1740069715";

    // Adiciona os scripts ao container do componente
    containerRef.current.appendChild(script1);
    containerRef.current.appendChild(script2);

    // Cleanup ao desmontar o componente
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // Remove todo o conteúdo dentro do containerRef
      }
    };
  }, []);

  return <div ref={containerRef} className="w-full flex justify-center"></div>; // O formulário será renderizado dentro deste container
};

export default Form;
