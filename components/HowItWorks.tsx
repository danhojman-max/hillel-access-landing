const STEPS = [
  {
    number: "01",
    title: "Te inscribís en la web",
    description:
      "Completá el formulario de inscripción con tus datos. Es el primer paso para sumarte al programa.",
  },
  {
    number: "02",
    title: "Comprometés una donación mensual",
    description:
      "Donación mensual de $20.000 (podés comprometer un monto mayor). El pago se realiza por Mercado Pago, tarjeta de crédito o débito, una vez que te inscribiste.",
  },
  {
    number: "03",
    title: "Accedés a oportunidades increíbles",
    description:
      "Te sumamos a nuestra lista de difusión por WhatsApp y mailing, y ahí te comunicamos todos los beneficios y oportunidades del programa.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-gold-subtle py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">El proceso</p>
        <h2 className="mt-4 font-serif text-4xl tracking-wide sm:text-5xl">
          ¿Cómo funciona?
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <article
              key={step.number}
              className="group border border-gold-subtle bg-surface/50 p-8 transition-colors hover:border-gold/40"
            >
              <span className="font-serif text-3xl text-gold/60">{step.number}</span>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
