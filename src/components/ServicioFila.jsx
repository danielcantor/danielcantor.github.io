import { trackEvent } from '../lib/analytics.js'

// Fila de servicio: nombre, para qué sirve y qué incluye, con un acceso directo al contacto.
export default function ServicioFila({ servicio, t }) {
  return (
    <article className="grid gap-x-6 gap-y-3 py-6 sm:py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] md:items-baseline">
      <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-semibold tracking-[-0.035em]">{servicio.titulo}</h3>
      <div className="flex flex-col gap-2.5">
        <p className="text-soft">{servicio.descripcion}</p>
        <p className="text-sm text-muted">
          <span className="sr-only">{t.incluye}</span>
          {servicio.incluye.join(' · ')}
        </p>
      </div>
      <a
        href="#contacto"
        onClick={() => trackEvent('cta_click', { cta: 'servicio', servicio: servicio.id, ubicacion: 'servicios' })}
        className="inline-flex min-h-11 items-center self-start text-[0.9375rem] font-semibold whitespace-nowrap text-accent-text underline-offset-4 hover:underline"
      >
        {t.consultar} <span aria-hidden="true">&nbsp;→</span>
        <span className="sr-only">
          {t.por}
          {servicio.titulo}
        </span>
      </a>
    </article>
  )
}
