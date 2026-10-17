import { useState } from 'react'
import { faq } from '../data/faq.js'
import { trackEvent } from '../lib/analytics.js'
import SectionHeading from './SectionHeading.jsx'
import AccordionItem from './AccordionItem.jsx'
import Reveal from './Reveal.jsx'

export default function FAQ() {
  const [abiertos, setAbiertos] = useState(() => new Set([0]))

  function toggle(i) {
    if (!abiertos.has(i)) trackEvent('faq_open', { pregunta: faq[i].pregunta })
    setAbiertos((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section id="faq" aria-labelledby="faq-titulo" className="mx-auto max-w-page px-4 py-24 sm:px-6 sm:py-36 lg:px-10">
      <Reveal>
        <SectionHeading
          id="faq-titulo"
          numero="06"
          eyebrow="Preguntas frecuentes"
          title={
            <>
              Lo que querés saber <span className="serif">antes de contratar</span>
            </>
          }
        >
          <div className="filas mt-4">
            {faq.map((item, i) => (
              <AccordionItem
                key={item.pregunta}
                id={`faq-${i}`}
                pregunta={item.pregunta}
                respuesta={item.respuesta}
                abierto={abiertos.has(i)}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </SectionHeading>
      </Reveal>
    </section>
  )
}
