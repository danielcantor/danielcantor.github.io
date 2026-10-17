import { servicios } from '../data/servicios.js'
import SectionHeading from './SectionHeading.jsx'
import ServicioFila from './ServicioFila.jsx'
import Reveal from './Reveal.jsx'

export default function Servicios() {
  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="mx-auto max-w-page px-4 pt-24 sm:px-6 sm:pt-36 lg:px-10">
      <Reveal>
        <SectionHeading
          id="servicios-titulo"
          numero="03"
          eyebrow="Servicios"
          title={
            <>
              Más consultas y ventas <span className="serif">desde tu sitio</span>
            </>
          }
          intro="Diseño web, asesoría e-commerce y SEO para pymes de Buenos Aires y todo el país. Se pueden contratar por separado o combinados, según dónde estés perdiendo clientes hoy."
        >
          <div className="filas mt-4">
            {servicios.map((servicio) => (
              <ServicioFila key={servicio.id} servicio={servicio} />
            ))}
          </div>
        </SectionHeading>
      </Reveal>
    </section>
  )
}
