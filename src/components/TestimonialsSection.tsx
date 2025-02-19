import { Bubble } from "./Bubble";

export const TestimonialsSection = () => {
  return (
    <section className="w-full">
      <div id="testimonials" className="bg-neutral-200 grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-24 py-20">
        <Bubble icon="https://github.com/nannocosmetica.png" text="lore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsunlore ipsun" title="Nanno Cosmética" />
        <Bubble icon="https://github.com/nannocosmetica.png" text="Teste" title="Nanno Cosmética" />
        <Bubble icon="https://github.com/nannocosmetica.png" text="Teste" title="Nanno Cosmética" />
        <Bubble icon="https://github.com/nannocosmetica.png" text="Teste" title="Nanno Cosmética" />
      </div>
    </section>
  );
};
