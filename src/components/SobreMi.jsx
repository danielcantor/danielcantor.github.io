import { sobreMi } from '../data/sobreMi.js'
import { site } from '../config/site.js'
import { useLang } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import Acento from './Acento.jsx'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

// El monograma ocupa el lugar de una foto: la barra del logo entre la D y la C.
function Monograma({ t }) {
  return (
    <div
      role="img"
      aria-label={t.monogramaAria(sobreMi.desde, site.city)}
      className="scroll-junta flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-md bg-inverse p-5 text-on-inverse sm:aspect-[4/5] sm:p-7"
    >
      <p className="text-[0.8125rem] text-inverse-muted">{t.monogramaArriba(sobreMi.desde)}</p>
      <p className="text-[clamp(6.5rem,13vw,10rem)] leading-[0.8] font-bold tracking-[-0.06em]">
        <span className="letra-d">D</span>
        <span className="letra-barra text-inverse-accent">/</span>
        <span className="letra-c">C</span>
      </p>
      <p className="serif text-xl leading-tight sm:text-[1.625rem]">{t.monogramaAbajo(site.city)}</p>
    </div>
  )
}

export default function SobreMi() {
  const lang = useLang()
  const t = ui[lang].estudio
  const { parrafos } = sobreMi[lang]
  const ficha = [...sobreMi[lang].ficha, [t.trabajoCon, sobreMi.herramientas.join(', ')]]

  return (
    <section id="estudio" aria-labelledby="estudio-titulo" className="mx-auto max-w-page px-4 pt-24 sm:px-6 sm:pt-36 lg:px-10">
      <Reveal>
        <SectionHeading numero="05" eyebrow={t.eyebrow}>
          <div className="grid gap-x-6 gap-y-8 md:grid-cols-9 md:items-end">
            <div className="md:col-span-4">
              <Monograma t={t} />
            </div>
            <div className="flex flex-col gap-5 md:col-span-5">
              <h2 id="estudio-titulo" className="sube text-[clamp(1.75rem,3vw,2.375rem)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
                <Acento partes={t.titulo} />
              </h2>
              {parrafos.map((p) => (
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
