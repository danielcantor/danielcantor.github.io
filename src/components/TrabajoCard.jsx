import { Link } from 'react-router'
import { trabajoPath } from '../data/trabajos.js'

// En mobile van de a dos por fila: tipografía y espaciados más chicos hasta `sm`.
export default function TrabajoCard({ trabajo }) {
  return (
    <Link
      to={trabajoPath(trabajo.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card text-ink no-underline transition-shadow hover:shadow-lg sm:rounded-[20px]"
    >
      <div className="relative overflow-hidden">
        <img
          src={trabajo.imagen.src}
          alt={trabajo.imagen.alt}
          width={trabajo.imagen.width}
          height={trabajo.imagen.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
        />
        {trabajo.ejemplo && (
          <span className="absolute top-2 left-2 rounded bg-card/90 px-1.5 py-0.5 text-[10px] font-semibold text-muted sm:top-3 sm:left-3 sm:text-[11px]">
            Ejemplo
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 px-3 pt-3 pb-3.5 sm:gap-1.5 sm:px-5.5 sm:pt-5 sm:pb-6">
        <span className="text-[11px] leading-snug font-semibold text-brand-text sm:text-[13px]">{trabajo.tipo}</span>
        <h3 className="font-display text-[15px] leading-snug font-bold sm:text-[21px]">{trabajo.titulo}</h3>
        <span className="mt-1 self-start rounded-md bg-accent-soft sm:rounded-full px-2 py-0.5 text-[11px] leading-snug font-semibold text-accent-ink sm:mt-1.5 sm:px-3 sm:py-1 sm:text-[13px]">
          {trabajo.resultado}
        </span>
        <span className="mt-auto pt-2.5 text-xs font-semibold text-brand-text group-hover:underline sm:pt-4 sm:text-sm">
          Ver caso <span className="hidden sm:inline">completo </span>
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
