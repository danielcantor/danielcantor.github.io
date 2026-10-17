import { sobreMi } from '../data/sobreMi.js'
import { site } from '../config/site.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

// El monograma ocupa el lugar de una foto: la barra del logo entre la D y la C.
function Monograma() {
  return (
    <div
      role="img"
      aria-label={`Monograma D/C: estudio independiente desde ${sobreMi.desde}, en ${site.city}`}
      className="flex aspect-[4/3] flex-col justify-between rounded-md bg-inverse p-5 text-on-inverse sm:aspect-[4/5] sm:p-7"
    >
      <p className="text-[0.8125rem] text-inverse-muted">Estudio independiente · desde {sobreMi.desde}</p>
      <p className="text-[clamp(6.5rem,13vw,10rem)] leading-[0.8] font-bold tracking-[-0.06em]">
        D<span className="text-inverse-accent">/</span>C
      </p>
      <p className="serif text-xl leading-tight sm:text-[1.625rem]">{site.city}, para todo el país</p>
    </div>
  )
}

export default function SobreMi() {
  const ficha = [...sobreMi.ficha, ['Trabajo con', sobreMi.herramientas.join(', ')]]

  return (
    <section id="estudio" aria-labelledby="estudio-titulo" className="mx-auto max-w-page px-4 pt-24 sm:px-6 sm:pt-36 lg:px-10">
      <Reveal>
        <SectionHeading numero="05" eyebrow="Estudio">
          <div className="grid gap-x-6 gap-y-8 md:grid-cols-9 md:items-end">
            <div className="md:col-span-4">
              <Monograma />
            </div>
            <div className="flex flex-col gap-5 md:col-span-5">
              <h2 id="estudio-titulo" className="text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
                Un estudio de una persona. Hablás directo con <span className="serif">quien diseña y programa</span> tu sitio.
              </h2>
              {sobreMi.parrafos.map((p) => (
                <p key={p} className="text-soft">
                  {p}
                </p>
              ))}
              <dl className="filas mt-2 grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] text-[0.9375rem]">
                {ficha.map(([dt, dd]) => (
                  <div key={dt} className="col-span-2 grid grid-cols-subgrid py-3">
                    <dt className="text-muted">{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </SectionHeading>
      </Reveal>
    </section>
  )
}
