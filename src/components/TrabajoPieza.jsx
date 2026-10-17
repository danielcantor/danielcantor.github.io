import { Link } from 'react-router'
import { trabajoPath } from '../i18n/paths.js'
import { trackEvent } from '../lib/analytics.js'
import CountUp from './CountUp.jsx'

// Versiones de la imagen generadas por `npm run images` (ancho 400 y 600, además de la de 800).
function cardSrcSet(src) {
  return [400, 600].map((w) => `${src.replace(/\.webp$/, `-${w}.webp`)} ${w}w`).concat(`${src} 800w`).join(', ')
}

// Detalle de un caso en la home: la captura, el problema que resolvió y dos números.
export default function TrabajoPieza({ trabajo, lang, verCompleto }) {
  const metricas = trabajo.metricas.slice(0, 2)

  return (
    <article className="grid gap-x-6 gap-y-6 lg:grid-cols-12">
      <figure className="flex flex-col gap-3 lg:col-span-7">
        <div className="overflow-hidden rounded-md">
          <img
            src={trabajo.imagen.src}
            srcSet={cardSrcSet(trabajo.imagen.src)}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt={trabajo.imagen.alt}
            width={trabajo.imagen.width}
            height={trabajo.imagen.height}
            loading="lazy"
            decoding="async"
            className="scroll-parallax aspect-[4/3] w-full object-cover"
          />
        </div>
        <figcaption className="text-sm text-muted">
          {trabajo.titulo} — {trabajo.resultado}
        </figcaption>
      </figure>
      <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:pb-9">
        <h3 className="sube serif text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1]">{trabajo.desafio.titulo}</h3>
        <dl className="grid grid-cols-2 gap-6 border-t border-ink pt-4">
          {metricas.map((m) => (
            <div key={m.label} className="flex flex-col-reverse">
              <dt className="text-sm text-muted">{m.label}</dt>
              <dd>
                <CountUp to={m.to} decimals={m.decimals} suffix={m.suffix} sign={m.sign} className="text-[2.75rem] leading-none font-semibold tracking-[-0.03em]" />
              </dd>
            </div>
          ))}
        </dl>
        <Link
          to={trabajoPath(trabajo.slug, lang)}
          onClick={() => trackEvent('select_content', { content_type: 'trabajo', content_id: trabajo.slug })}
          className="inline-flex min-h-11 items-center self-start font-semibold text-accent-text underline-offset-4 hover:underline"
        >
          {verCompleto} <span aria-hidden="true">&nbsp;→</span>
        </Link>
      </div>
    </article>
  )
}
