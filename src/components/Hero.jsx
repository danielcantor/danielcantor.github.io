import HeroAnimation from './HeroAnimation.jsx'
import { trackEvent } from '../lib/analytics.js'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-2 lg:pt-24 lg:pb-26"
    >
      <div className="flex flex-col gap-7">
        <p className="self-start rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-semibold text-brand-text">
          Diseño web Buenos Aires · Pymes y emprendimientos
        </p>
        <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.25rem)] leading-[1.04] font-extrabold tracking-[-0.025em]">
          Sitios web y tiendas online que <span className="text-brand-text">venden de verdad</span>.
        </h1>
        <p className="max-w-[34rem] text-[19px] text-muted">
          Creación de sitios web para pymes, asesoría e-commerce y posicionamiento web. Te acompaño
          desde la idea hasta que tu negocio aparece en Google.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#contacto"
            onClick={() => trackEvent('cta_click', { cta: 'diagnostico', ubicacion: 'hero' })}
            className="inline-flex h-13.5 items-center rounded-full bg-accent px-6.5 font-semibold text-on-accent no-underline transition-colors hover:bg-[#d9722a]"
          >
            Pedí tu diagnóstico gratis
          </a>
          <a
            href="#trabajos"
            onClick={() => trackEvent('cta_click', { cta: 'ver_trabajos', ubicacion: 'hero' })}
            className="inline-flex h-13.5 items-center rounded-full border-2 border-ink px-6.5 font-semibold text-ink no-underline transition-colors hover:bg-ink hover:text-surface"
          >
            Ver trabajos
          </a>
        </div>
      </div>

      <HeroAnimation />
    </section>
  )
}
