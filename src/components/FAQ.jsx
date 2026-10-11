import { useState } from 'react'
import { faq } from '../data/faq.js'
import SectionHeading from './SectionHeading.jsx'
import AccordionItem from './AccordionItem.jsx'
import Reveal from './Reveal.jsx'

export default function FAQ() {
  const [abiertos, setAbiertos] = useState(() => new Set([0]))

  function toggle(i) {
    setAbiertos((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <section id="faq" aria-labelledby="faq-titulo" className="border-y border-line-soft bg-white">
      <div className="mx-auto flex max-w-[54rem] flex-col gap-10 px-6 py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            id="faq-titulo"
            eyebrow="Preguntas frecuentes"
            title="Lo que más me preguntan sobre diseño web y posicionamiento web"
          />
        </Reveal>
        <Reveal className="border-t border-line">
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
        </Reveal>
      </div>
    </section>
  )
}
