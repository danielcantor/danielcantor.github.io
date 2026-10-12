import HeroAnimation from './HeroAnimation.jsx'
import { trackEvent } from '../lib/analytics.js'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-10 pb-14 sm:gap-14 sm:pt-16 sm:pb-20 lg:grid-cols-2 lg:pt-24 lg:pb-26"
    >
      <div className="flex flex-col gap-5 sm:gap-7">
        <p className="kicker">
          Diseño web Buenos Aires<span className="hidden sm:inline"> · Pymes y emprendimientos</span>
        </p>
        <h1 className="font-display text-[clamp(2.1rem,5.4vw,4.25rem)] leading-[1.06] font-extrabold tracking-[-0.025em]">
          Sitios web y tiendas online que <span className="text-brand-text">venden de verdad</span>.
        </h1>
        <p className="max-w-[34rem] text-[17px] text-muted sm:text-[19px]">
          Creación de sitios web para pymes, asesoría e-commerce y posicionamiento web. Te acompaño
          desde la idea hasta que tu negocio aparece en Google.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#contacto"
            onClick={() => trackEvent('cta_click', { cta: 'diagnostico', ubicacion: 'hero' })}
            className="btn btn-primary btn-bar h-12 px-5.5 sm:h-13.5 sm:px-6.5"
          >
            Pedí tu diagnóstico gratis
          </a>
          <a
            href="#trabajos"
            onClick={() => trackEvent('cta_click', { cta: 'ver_trabajos', ubicacion: 'hero' })}
            className="btn btn-outline h-12 px-5.5 sm:h-13.5 sm:px-6.5"
          >
            Ver trabajos
          </a>
        </div>
      </div>

      <HeroAnimation />
    </section>
  )
}
