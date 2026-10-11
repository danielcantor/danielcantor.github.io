import CountUp from './CountUp.jsx'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-2 lg:pt-24 lg:pb-26"
    >
      <div className="flex flex-col gap-7">
        <p className="self-start rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-semibold text-brand">
          Diseño web Buenos Aires · Pymes y emprendimientos
        </p>
        <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.04] font-extrabold tracking-[-0.025em]">
          Sitios web y tiendas online que <span className="text-brand">venden de verdad</span>.
        </h1>
        <p className="max-w-[34rem] text-[19px] text-muted">
          Creación de sitios web para pymes, asesoría e-commerce y posicionamiento web. Te acompaño
          desde la idea hasta que tu negocio aparece en Google.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#contacto"
            className="inline-flex h-13.5 items-center rounded-full bg-accent px-6.5 font-semibold text-ink no-underline transition-colors hover:bg-[#d9722a]"
          >
            Pedí tu diagnóstico gratis
          </a>
          <a
            href="#trabajos"
            className="inline-flex h-13.5 items-center rounded-full border-2 border-ink px-6.5 font-semibold text-ink no-underline transition-colors hover:bg-ink hover:text-white"
          >
            Ver trabajos
          </a>
        </div>
      </div>

      <div className="relative flex aspect-[5/4] items-end overflow-hidden rounded-[28px] bg-brand p-5 sm:p-7">
        <div className="absolute inset-x-5 top-5 overflow-hidden rounded-[14px] bg-surface shadow-lg sm:inset-x-7 sm:top-7">
          <div aria-hidden="true" className="flex h-7 items-center gap-1.5 bg-line px-3">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </div>
          {/* TODO: reemplazar por una captura real de un proyecto (1200×960). */}
          <img
            src="/img/hero.webp"
            alt="Captura de un sitio web diseñado por Daniel Cantor"
            width="1200"
            height="960"
            fetchpriority="high"
            className="block aspect-[16/10] w-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col gap-0.5 rounded-2xl bg-white px-5 py-4 shadow-md">
          <span className="text-[13px] text-muted">Resultado destacado</span>
          <span className="font-display text-[22px] font-bold sm:text-[26px]">
            {/* TODO: usar un resultado real de un cliente. */}
            <CountUp to={180} sign suffix="%" delay={300} /> visitas orgánicas
          </span>
        </div>
      </div>
    </section>
  )
}
