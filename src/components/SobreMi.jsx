import { sobreMi } from '../data/sobreMi.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-titulo"
      className="mx-auto max-w-page px-6 py-14 sm:py-20 lg:py-24"
    >
      <Reveal className="flex max-w-3xl flex-col gap-4 sm:gap-5">
        <SectionHeading
          id="sobre-mi-titulo"
          eyebrow="Sobre mí"
          title="Consultor SEO y desarrollador web en Buenos Aires"
        />
        {sobreMi.parrafos.map((p) => (
          <p key={p} className="text-[0.9375rem] text-muted sm:text-base">{p}</p>
        ))}
        {/* Firma decorativa: el nombre ya está en el texto. */}
        <p aria-hidden="true" className="-mt-1 font-script text-[2.25rem] leading-none font-bold text-brand-text sm:text-[2.625rem]">
          Daniel
        </p>
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Herramientas con las que trabajo</h3>
          <ul className="flex flex-wrap gap-2 sm:gap-2.5">
            {sobreMi.herramientas.map((h) => (
              <li key={h} className="rounded-[10px] border border-line-strong bg-card px-3 py-1.5 text-[0.8125rem] font-medium sm:px-3.5 sm:py-2 sm:text-sm">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
