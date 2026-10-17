import { trackEvent } from '../lib/analytics.js'

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto flex max-w-page flex-col gap-10 px-4 pt-8 pb-10 sm:gap-14 sm:px-6 sm:pt-14 sm:pb-14 lg:px-10 lg:pt-18">
      <h1 className="hero-titulo max-w-[74rem] text-[clamp(2.75rem,7.6vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance">
        <span className="hero-texto">
          Sitios y tiendas online para pymes que quieren vender <span className="serif">de verdad</span>
          <span className="hero-barra text-accent">/</span>
        </span>
      </h1>
      <div className="hero-regla grid gap-x-6 gap-y-5 border-t border-ink pt-4 sm:pt-6 lg:grid-cols-12">
        <p className="text-sm text-muted lg:col-span-3">
          <span className="font-semibold text-accent-text">(01) </span>El estudio
        </p>
        <p style={{ '--i': 1 }} className="text-[1.0625rem] leading-[1.45] sm:text-xl lg:col-span-5">
          Diseño, desarrollo y SEO para pymes que hoy reciben visitas pero pocas consultas. Del diagnóstico a que tus
          clientes te encuentren en Google.
        </p>
        {/* Mientras este botón se ve, la barra fija de mobile sería redundante. */}
        <div data-oculta-barra-cta style={{ '--i': 2 }} className="flex flex-col items-start gap-3 lg:col-span-4">
          <a
            href="#contacto"
            onClick={() => trackEvent('cta_click', { cta: 'diagnostico', ubicacion: 'hero' })}
            className="btn btn-accent h-14 w-full justify-between px-6.5 sm:w-auto sm:justify-center"
          >
            Pedí tu diagnóstico gratis <span aria-hidden="true">→</span>
          </a>
          <p className="text-sm text-muted">Sin compromiso · respuesta en 24 h hábiles</p>
        </div>
      </div>
    </section>
  )
}
