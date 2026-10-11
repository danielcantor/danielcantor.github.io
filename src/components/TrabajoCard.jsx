import { Link } from 'react-router'
import { trabajoPath } from '../data/trabajos.js'

export default function TrabajoCard({ trabajo }) {
  return (
    <Link
      to={trabajoPath(trabajo.slug)}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-white text-ink no-underline transition-shadow hover:shadow-lg"
    >
      <div className="overflow-hidden">
        <img
          src={trabajo.imagen.src}
          alt={trabajo.imagen.alt}
          width={trabajo.imagen.width}
          height={trabajo.imagen.height}
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 px-5.5 pt-5 pb-6">
        <span className="text-[13px] font-semibold text-brand">
          {trabajo.tipo}
          {trabajo.ejemplo && <span className="ml-2 rounded bg-line px-1.5 py-0.5 text-[11px] text-muted">Ejemplo</span>}
        </span>
        <h3 className="font-display text-[21px] leading-snug font-bold">{trabajo.titulo}</h3>
        <span className="mt-1.5 self-start rounded-full bg-accent-soft px-3 py-1 text-[13px] font-semibold text-accent-ink">
          {trabajo.resultado}
        </span>
        <span className="mt-auto pt-4 text-sm font-semibold text-brand group-hover:underline">
          Ver caso completo <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
