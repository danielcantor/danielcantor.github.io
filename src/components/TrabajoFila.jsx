import { Link } from 'react-router'
import { trabajoPath } from '../data/trabajos.js'
import { trackEvent } from '../lib/analytics.js'

// Fila del índice de trabajos: número, cliente, tipo, rubro y año.
export default function TrabajoFila({ trabajo, numero }) {
  return (
    <Link
      to={trabajoPath(trabajo.slug)}
      onClick={() => trackEvent('select_content', { content_type: 'trabajo', content_id: trabajo.slug })}
      className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 gap-y-0.5 py-4 no-underline md:min-h-19 md:grid-cols-[3.5rem_3fr_3fr_2fr_3.5rem] md:items-center md:gap-4 md:py-3"
    >
      <span className="serif text-xl text-accent-text md:text-2xl">{String(numero).padStart(2, '0')}</span>
      <span className="text-[1.375rem] leading-tight font-semibold tracking-[-0.02em] group-hover:underline group-hover:underline-offset-4 md:text-[1.625rem]">
        {trabajo.titulo}
      </span>
      <span className="text-sm md:order-last md:text-right md:text-[0.9375rem]">{trabajo.anio}</span>
      <span className="col-start-2 col-end-4 text-sm text-muted md:col-auto md:text-[0.9375rem]">{trabajo.tipo}</span>
      <span className="hidden text-[0.9375rem] text-muted md:block">{trabajo.rubro}</span>
    </Link>
  )
}
