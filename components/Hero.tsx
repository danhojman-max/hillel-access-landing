export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 glow-radial">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,160,102,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-6 text-xs tracking-[0.35em] text-gold uppercase">
          Fundación Hillel Argentina
        </p>

        <h1 className="font-serif text-5xl leading-tight tracking-wide sm:text-7xl md:text-8xl">
          <span className="text-gradient-gold">Hillel Access</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          Un programa para quienes buscan acceso prioritario a las oportunidades
          que lanzamos: eventos, viajes, espacios y experiencias exclusivas de
          la comunidad Hillel.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#inscripcion"
            className="inline-block border border-gold bg-gold/10 px-10 py-4 text-sm tracking-widest uppercase transition-all hover:bg-gold/20 hover:border-gold"
          >
            Inscribite
          </a>
          <a
            href="#como-funciona"
            className="inline-block px-10 py-4 text-sm tracking-widest text-muted uppercase transition-colors hover:text-foreground"
          >
            Conocé más
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#como-funciona" aria-label="Ir a cómo funciona" className="text-gold/50">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
