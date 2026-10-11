import { sobreMi } from '../data/sobreMi.js'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function SobreMi() {
  const { foto } = sobreMi
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-titulo"
      className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[2fr_3fr] lg:py-24"
    >
      <Reveal>
        <img
          src={foto.src}
          alt={foto.alt}
          width={foto.width}
          height={foto.height}
          loading="lazy"
          decoding="async"
          className="mx-auto aspect-[4/5] w-full max-w-[440px] rounded-[28px] object-cover"
        />
      </Reveal>
      <Reveal delay={100} className="flex flex-col gap-5">
        <SectionHeading
          id="sobre-mi-titulo"
          eyebrow="Sobre mí"
          title="Consultor SEO y desarrollador web en Buenos Aires"
        />
        {sobreMi.parrafos.map((p) => (
          <p key={p} className="text-muted">{p}</p>
        ))}
        <div className="flex flex-col gap-3">
          <h3 className="text-base font-semibold">Herramientas con las que trabajo</h3>
          <ul className="flex flex-wrap gap-2.5">
            {sobreMi.herramientas.map((h) => (
              <li key={h} className="rounded-[10px] border border-line-strong bg-white px-3.5 py-2 text-sm font-medium">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
