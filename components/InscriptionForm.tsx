"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full border border-gold-subtle bg-background px-4 py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-gold focus:outline-none";

const labelClass = "mb-2 block text-sm text-muted";

export function InscriptionForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: formData.get("nombre"),
      birthYear: formData.get("birthYear"),
      birthMonth: formData.get("birthMonth"),
      birthDay: formData.get("birthDay"),
      celular: formData.get("celular"),
      email: formData.get("email"),
      montoDonacion: formData.get("montoDonacion"),
      confirmacion: formData.get("confirmacion") === "on",
    };

    try {
      const response = await fetch("/api/inscripcion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        setState("error");
        setErrorMessage(data.error ?? "Ocurrió un error. Intentá de nuevo.");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage("Error de conexión. Intentá de nuevo.");
    }
  }

  if (state === "success") {
    return (
      <section id="inscripcion" className="border-t border-gold-subtle py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="border border-gold-subtle bg-surface/50 p-12">
            <p className="text-xs tracking-[0.3em] text-gold uppercase">
              Inscripción recibida
            </p>
            <h2 className="mt-4 font-serif text-3xl">¡Gracias por inscribirte!</h2>
            <p className="mt-6 text-muted leading-relaxed">
              Recibimos tu inscripción. Te vamos a contactar por WhatsApp y email
              con los próximos pasos para la donación y todos los beneficios de
              Hillel Access.
            </p>
            <button
              type="button"
              onClick={() => setState("idle")}
              className="mt-8 text-sm text-gold underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              Enviar otra inscripción
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscripcion" className="border-t border-gold-subtle py-24">
      <div className="mx-auto max-w-xl px-6">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Sumate</p>
        <h2 className="mt-4 font-serif text-4xl tracking-wide">Inscripción</h2>
        <p className="mt-4 text-sm text-muted">
          Completá tus datos para sumarte a Hillel Access.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <div>
            <label htmlFor="nombre" className={labelClass}>
              Tu nombre y apellido <span className="text-gold">*</span>
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
              placeholder="Nombre y apellido"
            />
          </div>

          <fieldset>
            <legend className={labelClass}>
              Fecha de nacimiento <span className="text-gold">*</span>
            </legend>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label htmlFor="birthDay" className="sr-only">
                  Día
                </label>
                <input
                  id="birthDay"
                  name="birthDay"
                  type="number"
                  required
                  min={1}
                  max={31}
                  placeholder="DD"
                  className={inputClass}
                  aria-label="Día de nacimiento"
                />
              </div>
              <div>
                <label htmlFor="birthMonth" className="sr-only">
                  Mes
                </label>
                <input
                  id="birthMonth"
                  name="birthMonth"
                  type="number"
                  required
                  min={1}
                  max={12}
                  placeholder="MM"
                  className={inputClass}
                  aria-label="Mes de nacimiento"
                />
              </div>
              <div>
                <label htmlFor="birthYear" className="sr-only">
                  Año
                </label>
                <input
                  id="birthYear"
                  name="birthYear"
                  type="number"
                  required
                  min={1900}
                  max={new Date().getFullYear()}
                  placeholder="AAAA"
                  className={inputClass}
                  aria-label="Año de nacimiento"
                />
              </div>
            </div>
          </fieldset>

          <div>
            <label htmlFor="celular" className={labelClass}>
              Tu celular (incluyendo 549) <span className="text-gold">*</span>
            </label>
            <input
              id="celular"
              name="celular"
              type="tel"
              required
              autoComplete="tel"
              className={inputClass}
              placeholder="54911..."
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Tu email <span className="text-gold">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder="tu@email.com"
            />
            <p className="mt-2 text-xs text-muted">
              Debe ser el mismo con el que te registraste en{" "}
              <a
                href="https://www.hillelargentina.org.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2"
              >
                hillelargentina.org.ar
              </a>
            </p>
          </div>

          <div>
            <label htmlFor="montoDonacion" className={labelClass}>
              Monto de la donación mensual <span className="text-gold">*</span>
            </label>
            <input
              id="montoDonacion"
              name="montoDonacion"
              type="text"
              required
              className={inputClass}
              placeholder="Mínimo $20.000"
            />
            <p className="mt-2 text-xs text-muted">
              Recordá que es un mínimo de $20.000. Podés comprometer un monto mayor.
            </p>
          </div>

          <label className="flex cursor-pointer items-start gap-3 border border-gold-subtle p-4 transition-colors hover:border-gold/50">
            <input
              type="checkbox"
              name="confirmacion"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-gold"
            />
            <span className="text-sm leading-relaxed text-muted">
              Leí toda la información y quiero ser parte de Hillel Access{" "}
              <span className="text-gold">*</span>
            </span>
          </label>

          {state === "error" && errorMessage && (
            <p className="text-sm text-red-400" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={state === "loading"}
            className="w-full border border-gold bg-gold/10 py-4 text-sm tracking-widest uppercase transition-all hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state === "loading" ? "Enviando..." : "Enviar inscripción"}
          </button>
        </form>
      </div>
    </section>
  );
}
