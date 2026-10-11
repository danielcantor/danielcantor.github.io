import { proceso } from '../data/proceso.js'
import SectionHeading from './SectionHeading.jsx'
import ProcesoPaso from './ProcesoPaso.jsx'
import Reveal from './Reveal.jsx'

export default function Proceso() {
  return (
    <section id="proceso" aria-labelledby="proceso-titulo" className="bg-ink text-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            id="proceso-titulo"
            eyebrow="Proceso"
            title="Cómo trabajo, paso a paso"
            intro="Un proceso simple y transparente, para que sepas en todo momento en qué etapa está tu proyecto."
            dark
          />
        </Reveal>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((paso, i) => (
            <Reveal as="li" key={paso.titulo} delay={i * 100}>
              <ProcesoPaso numero={i + 1} titulo={paso.titulo} descripcion={paso.descripcion} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
