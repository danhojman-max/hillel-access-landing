"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Inscripción", href: "#inscripcion" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold-subtle bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-serif text-xl tracking-[0.2em] text-foreground transition-opacity hover:opacity-80"
        >
          HILLEL ACCESS
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#inscripcion"
            className="border border-gold-subtle px-5 py-2 text-sm text-foreground transition-all hover:border-gold hover:text-gold"
          >
            Inscribite
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-px w-6 bg-gold transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-gold transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-gold transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-gold-subtle bg-background px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block text-muted transition-colors hover:text-gold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#inscripcion"
                className="inline-block border border-gold-subtle px-5 py-2 text-foreground"
                onClick={() => setOpen(false)}
              >
                Inscribite
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
