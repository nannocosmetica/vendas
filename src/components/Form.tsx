import { useEffect, useRef } from "react";

const Form = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    if (document.getElementById("amoforms_script_1437124")) return;

    const script1 = document.createElement("script");
    script1.innerHTML = `!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1437124",hash:"fdbbb42a576edd80d80f24a2dadbdd5a",locale:"pt"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");`;

    const script2 = document.createElement("script");
    script2.id = "amoforms_script_1437124";
    script2.async = true;
    script2.charset = "utf-8";
    script2.src = "https://forms.kommo.com/forms/assets/js/amoforms.js?1740069715";

    containerRef.current.appendChild(script1);
    containerRef.current.appendChild(script2);

    const observer = new MutationObserver(() => {
      const iframe = document.getElementById("amoforms_iframe_1437124");
      if (iframe) {
        iframe.setAttribute("title", "Formulário de contato");
        observer.disconnect(); // Para de observar após encontrar o iframe
      }
    });

    observer.observe(containerRef.current, { childList: true, subtree: true });

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      observer.disconnect(); // Limpa o observer
    };
  }, []);

  return <div ref={containerRef} className="w-full flex justify-center"></div>;
};

export default Form;