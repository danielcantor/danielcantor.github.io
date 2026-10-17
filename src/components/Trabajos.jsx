import { useEffect, useRef, useState } from 'react'
import { trabajos } from '../data/trabajos.js'
import SectionHeading from './SectionHeading.jsx'
import TrabajoCard from './TrabajoCard.jsx'
import Reveal from './Reveal.jsx'
import { ChevronLeftIcon, ChevronRightIcon } from './icons.jsx'

const flechaClase =
  'grid size-11 place-items-center rounded-full border border-line-strong bg-card text-ink transition-colors hover:bg-brand-soft disabled:cursor-default disabled:opacity-40 disabled:hover:bg-card'

// Carrusel con scroll-snap nativo: se desliza con el dedo, el trackpad o las flechas.
// En mobile se ve una tarjeta y asoma la siguiente; en desktop, tres.
export default function Trabajos() {
  const pistaRef = useRef(null)
  const [puedeAtras, setPuedeAtras] = useState(false)
  const [puedeAdelante, setPuedeAdelante] = useState(true)

  useEffect(() => {
    const pista = pistaRef.current
    const actualizar = () => {
      setPuedeAtras(pista.scrollLeft > 4)
      setPuedeAdelante(pista.scrollLeft + pista.clientWidth < pista.scrollWidth - 4)
    }
    actualizar()
    pista.addEventListener('scroll', actualizar, { passive: true })
    window.addEventListener('resize', actualizar)
    return () => {
      pista.removeEventListener('scroll', actualizar)
      window.removeEventListener('resize', actualizar)
    }
  }, [])

  const mover = (direccion) => {
    const pista = pistaRef.current
    const tarjeta = pista.querySelector('li')
    const paso = tarjeta ? tarjeta.offsetWidth + parseFloat(getComputedStyle(pista).columnGap || 0) : pista.clientWidth
    pista.scrollBy({ left: direccion * paso, behavior: 'smooth' })
  }

  return (
    <section
      id="trabajos"
      aria-labelledby="trabajos-titulo"
      className="mx-auto flex max-w-page flex-col gap-8 px-6 py-14 sm:gap-12 sm:py-20 lg:py-24"
    >
      <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="trabajos-titulo"
          eyebrow="Trabajos"
          title="Proyectos de creación de sitios web y optimización de tiendas online"
          intro="Algunos casos de pymes y emprendimientos con los que trabajé. Entrá a cada uno para ver qué se hizo y qué resultados tuvo."
        />
        {/* Sin nada para deslizar (pocas tarjetas en desktop), las flechas sobran. */}
        <div className={`shrink-0 gap-2 ${puedeAtras || puedeAdelante ? 'flex' : 'hidden'}`}>
          <button type="button" onClick={() => mover(-1)} disabled={!puedeAtras} aria-controls="trabajos-carrusel" aria-label="Trabajo anterior" className={flechaClase}>
            <ChevronLeftIcon className="size-5" />
          </button>
          <button type="button" onClick={() => mover(1)} disabled={!puedeAdelante} aria-controls="trabajos-carrusel" aria-label="Trabajo siguiente" className={flechaClase}>
            <ChevronRightIcon className="size-5" />
          </button>
        </div>
      </Reveal>
      <Reveal>
        <ul
          id="trabajos-carrusel"
          ref={pistaRef}
          aria-label="Trabajos"
          className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto overscroll-x-contain px-6 pb-2 [scrollbar-width:none] sm:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {trabajos.map((trabajo) => (
            <li
              key={trabajo.slug}
              className="shrink-0 basis-[78%] snap-start sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
            >
              <TrabajoCard trabajo={trabajo} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
