import { servicios } from '../data/servicios.js'
import { useLang } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import Acento from './Acento.jsx'
import SectionHeading from './SectionHeading.jsx'
import ServicioFila from './ServicioFila.jsx'
import Reveal from './Reveal.jsx'

export default function Servicios() {
  const lang = useLang()
  const t = ui[lang].servicios

  return (
    <section id="servicios" aria-labelledby="servicios-titulo" className="mx-auto max-w-page px-4 pt-24 sm:px-6 sm:pt-36 lg:px-10">
      <Reveal>
        <SectionHeading
          id="servicios-titulo"
          numero="03"
          eyebrow={t.eyebrow}
          title={<Acento partes={t.titulo} />}
          intro={t.intro}
        >
          <div className="filas mt-4">
            {servicios[lang].map((servicio) => (
              <ServicioFila key={servicio.id} servicio={servicio} t={t} />
            ))}
          </div>
        </SectionHeading>
      </Reveal>
    </section>
  )
}
