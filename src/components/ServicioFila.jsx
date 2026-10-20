import { Link } from 'react-router'
import { servicioPath } from '../i18n/paths.js'
import { trackEvent } from '../lib/analytics.js'

// Fila de servicio: nombre (con link a su landing), para qué sirve y qué incluye, y el acceso a esa landing.
export default function ServicioFila({ servicio, t, lang }) {
  return (
    <article className="grid gap-x-6 gap-y-3 py-6 sm:py-7 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] md:items-baseline">
      <h3 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-semibold tracking-[-0.035em]">
        <Link to={servicioPath(servicio.slugs, lang)} className="no-underline underline-offset-6 hover:underline hover:decoration-2">
          {servicio.titulo}
        </Link>
      </h3>
      <div className="flex flex-col gap-2.5">
        <p className="text-soft">{servicio.descripcion}</p>
        <p className="text-sm text-muted">
          <span className="sr-only">{t.incluye}</span>
          {servicio.incluye.join(' · ')}
        </p>
      </div>
      <Link
        to={servicioPath(servicio.slugs, lang)}
        onClick={() => trackEvent('select_content', { content_type: 'servicio', content_id: servicio.id })}
        className="inline-flex min-h-11 items-center self-start text-[0.9375rem] font-semibold whitespace-nowrap text-accent-text underline-offset-4 hover:underline"
      >
        {t.verDetalle} <span aria-hidden="true">&nbsp;→</span>
        <span className="sr-only">: {servicio.titulo}</span>
      </Link>
    </article>
  )
}
