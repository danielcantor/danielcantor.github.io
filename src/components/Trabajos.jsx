import { Link } from 'react-router'
import { getTrabajos } from '../data/trabajos.js'
import { useLang, trabajoPath } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'
import Acento from './Acento.jsx'
import SectionHeading from './SectionHeading.jsx'
import TrabajoFila from './TrabajoFila.jsx'
import TrabajoPieza from './TrabajoPieza.jsx'
import Reveal from './Reveal.jsx'

// Arriba, el primer caso a sangre; después el índice de todos y una pieza de detalle por cada uno de los demás.
export default function Trabajos() {
  const lang = useLang()
  const t = ui[lang].trabajos
  const trabajos = getTrabajos(lang)
  const [destacado, ...resto] = trabajos

  return (
    <section id="trabajos" aria-labelledby="trabajos-titulo" className="mx-auto flex max-w-page flex-col px-4 sm:px-6 lg:px-10">
      <Link
        to={trabajoPath(destacado.slug, lang)}
        onClick={() => trackEvent('select_content', { content_type: 'trabajo', content_id: destacado.slug })}
        className="group block no-underline"
      >
        <div className="overflow-hidden rounded-md bg-panel px-4 pt-5 sm:px-12 sm:pt-12 lg:px-18 lg:pt-14">
          <img
            src={destacado.portada.src}
            alt={destacado.portada.alt}
            width={destacado.portada.width}
            height={destacado.portada.height}
            decoding="async"
            className="scroll-acerca aspect-[4/3] w-full rounded-t-md object-cover object-top shadow-[0_30px_60px_-30px_rgba(15,27,61,0.45)] sm:aspect-[16/7]"
          />
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-0.5 pt-3.5 text-[0.9375rem] lg:grid-cols-12">
          <p className="font-semibold lg:col-span-4">{destacado.titulo}</p>
          <p className="text-muted max-lg:order-last max-lg:col-span-2 lg:col-span-4">{destacado.tipo}</p>
          <p className="text-muted max-lg:hidden lg:col-span-2">{destacado.anio}</p>
          <p className="text-right font-semibold text-accent-text group-hover:underline lg:col-span-2">{t.verCaso}</p>
        </div>
      </Link>

      <Reveal className="pt-20 sm:pt-28">
        <SectionHeading
          id="trabajos-titulo"
          numero="02"
          eyebrow={t.eyebrow}
          title={<Acento partes={t.titulo} />}
          intro={t.intro}
        >
          <ol className="filas mt-4">
            {trabajos.map((trabajo, i) => (
              <li key={trabajo.slug}>
                <TrabajoFila trabajo={trabajo} numero={i + 1} lang={lang} />
              </li>
            ))}
          </ol>
        </SectionHeading>
      </Reveal>

      {resto.map((trabajo) => (
        <Reveal key={trabajo.slug} className="pt-14 sm:pt-16">
          <TrabajoPieza trabajo={trabajo} lang={lang} verCompleto={t.verCompleto} />
        </Reveal>
      ))}
    </section>
  )
}
