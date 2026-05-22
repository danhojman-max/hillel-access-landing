const BENEFITS = [
  {
    title: "Eventos con cupos limitados",
    description:
      "Prioridad en acceso a entradas de eventos top como Experiencia Endeavor y Latam Economic Forum.",
  },
  {
    title: "Viajes internacionales",
    description: "Prioridad en los viajes internacionales de Hillel.",
  },
  {
    title: "Cowork",
    description:
      "Utilización de la sala de reuniones en el cowork una vez al mes.",
  },
  {
    title: "Casa y parrilla",
    description:
      "Utilización de la casa/parrilla una vez por año para una jornada con tu emprendimiento, empresa o amigos.",
  },
  {
    title: "Evento anual",
    description:
      "Invitación exclusiva al evento anual de Hillel con grandes donantes.",
  },
  {
    title: "Actividades bimestrales",
    description:
      "Actividades bimestrales exclusivas para los miembros de Hillel Access.",
  },
  {
    title: "Actividades regulares",
    description:
      "Prioridad en actividades regulares de Hillel con cupos limitados.",
  },
];

export function Benefits() {
  const [featured, ...rest] = BENEFITS;

  return (
    <section id="beneficios" className="border-t border-gold-subtle py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs tracking-[0.3em] text-gold uppercase">Lo que obtenés</p>
        <h2 className="mt-4 font-serif text-4xl tracking-wide sm:text-5xl">
          ¿Cuáles son los beneficios?
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="border border-gold-subtle p-8 transition-all hover:border-gold/50 hover:bg-surface/30 md:col-span-2">
            <div className="mb-4 h-px w-12 bg-gold/40" />
            <h3 className="font-serif text-2xl md:text-3xl">{featured.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
              {featured.description}
            </p>
          </article>

          {rest.map((benefit) => (
            <article
              key={benefit.title}
              className="border border-gold-subtle p-6 transition-all hover:border-gold/50 hover:bg-surface/30"
            >
              <div className="mb-4 h-px w-8 bg-gold/40" />
              <h3 className="font-serif text-xl">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
