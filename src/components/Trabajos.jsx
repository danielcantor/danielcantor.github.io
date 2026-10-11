import { trabajos } from '../data/trabajos.js'
import SectionHeading from './SectionHeading.jsx'
import TrabajoCard from './TrabajoCard.jsx'
import Reveal from './Reveal.jsx'

export default function Trabajos() {
  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-titulo"
      className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:gap-12 sm:py-20 lg:py-24"
    >
      <Reveal>
        <SectionHeading
          id="trabajos-titulo"
          eyebrow="Trabajos"
          title="Proyectos de creación de sitios web y optimización de tiendas online"
          intro="Algunos casos de pymes y emprendimientos con los que trabajé. Entrá a cada uno para ver qué se hizo y qué resultados tuvo."
        />
      </Reveal>
      <ul className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {trabajos.map((trabajo, i) => (
          <Reveal as="li" key={trabajo.slug} delay={i * 80}>
            <TrabajoCard trabajo={trabajo} />
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
