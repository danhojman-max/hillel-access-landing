"use client";

import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/5491131620461";

const FAQ_ITEMS = [
  {
    question: "¿Cuál es el compromiso de donación?",
    answer:
      "Para participar en Hillel Access tenés que comprometer la donación mensual de $20.000 por al menos un año, o el equivalente en donaciones. También podés comprometer una donación mayor si lo deseás.",
  },
  {
    question: "¿Cómo realizo el pago?",
    answer:
      "La donación se realiza directamente a través de Mercado Pago. Una vez que te inscribiste en la web, te enviamos un link de pago por WhatsApp y email. Podés pagar con tarjeta de crédito, débito o Mercado Pago.",
  },
  {
    question: "¿Qué pasa después de inscribirme?",
    answer:
      "Te sumamos a una lista de difusión por WhatsApp y mailing. Ahí te vamos a estar comunicando respecto de todos los beneficios, oportunidades y los pasos para activar tu donación.",
  },
  {
    question: "¿Puedo donar más de $20.000 por mes?",
    answer:
      "Sí. El monto mínimo es $20.000 mensuales, pero podés comprometer una donación mayor si querés aportar más a la Fundación.",
  },
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 shrink-0"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-gold-subtle py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Dudas</p>
        <h2 className="mt-4 font-serif text-4xl tracking-wide sm:text-5xl">
          Preguntas frecuentes
        </h2>

        <div className="mt-12 space-y-2">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-gold-subtle bg-surface/30"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:text-gold"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-serif text-lg">{item.question}</span>
                  <span
                    className={`shrink-0 text-gold transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-gold-subtle px-6 pb-5 text-sm leading-relaxed text-muted">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 border border-gold-subtle bg-surface/30 px-6 py-8 text-center">
          <p className="text-sm text-muted">
            Si tenés más dudas o consultas, escribinos por WhatsApp
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-3 border border-gold-subtle bg-gold/10 px-6 py-3 text-sm text-foreground transition-all hover:border-gold hover:bg-gold/20"
          >
            <WhatsAppIcon />
            <span>Escribinos por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
