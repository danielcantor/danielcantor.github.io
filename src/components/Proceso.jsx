import { proceso } from '../data/proceso.js'
import SectionHeading from './SectionHeading.jsx'
import ProcesoPaso from './ProcesoPaso.jsx'
import Reveal from './Reveal.jsx'

export default function Proceso() {
  return (
    <section id="proceso" aria-labelledby="proceso-titulo" className="mx-auto max-w-page px-4 pt-24 sm:px-6 sm:pt-36 lg:px-10">
      <SectionHeading
        id="proceso-titulo"
        numero="04"
        eyebrow="Cómo trabajo"
        title={
          <>
            Presupuesto cerrado, avances <span className="serif">cada semana</span>
          </>
        }
      >
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proceso.map((paso, i) => (
            <Reveal as="li" key={paso.titulo} delay={i * 120}>
              <ProcesoPaso numero={i + 1} titulo={paso.titulo} descripcion={paso.descripcion} />
            </Reveal>
          ))}
        </ol>
      </SectionHeading>
    </section>
  )
}
