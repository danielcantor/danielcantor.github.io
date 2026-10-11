import { useRef, useState } from 'react'
import { servicios } from '../data/servicios.js'
import SectionHeading from './SectionHeading.jsx'
import ServicioCard from './ServicioCard.jsx'
import Reveal from './Reveal.jsx'

export default function Servicios() {
  const trackRef = useRef(null)
  const [activo, setActivo] = useState(0)

  // En mobile las tarjetas forman un carrusel con scroll-snap; los puntos siguen la posición.
  function onScroll() {
    const track = trackRef.current
    const cards = [...track.children]
    const left = track.scrollLeft
    const index = cards.reduce(
      (best, card, i) =>
        Math.abs(card.offsetLeft - track.offsetLeft - left) <
        Math.abs(cards[best].offsetLeft - track.offsetLeft - left)
          ? i
          : best,
      0,
    )
    setActivo(index)
  }

  function irA(index) {
    const track = trackRef.current
    const card = track.children[index]
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: smooth ? 'smooth' : 'auto' })
  }

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="border-y border-line-soft bg-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            id="servicios-titulo"
            eyebrow="Servicios"
            title="Diseño web, e-commerce y SEO para pymes de Buenos Aires"
            intro="Creación de sitios web para pymes, asesoría e-commerce y consultoría SEO. Se pueden contratar por separado o combinados."
          />
        </Reveal>

        <div className="flex flex-col gap-4">
          <div
            ref={trackRef}
            onScroll={onScroll}
            tabIndex={0}
            role="region"
            aria-label="Servicios. En pantallas chicas, deslizá para ver más."
            className="-mx-6 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-3 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {servicios.map((servicio, i) => (
              <Reveal
                key={servicio.id}
                delay={i * 100}
                className="w-[84%] max-w-[380px] shrink-0 snap-start sm:w-[60%] lg:w-auto lg:max-w-none"
              >
                <ServicioCard servicio={servicio} numero={i + 1} />
              </Reveal>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1 lg:hidden">
            {servicios.map((servicio, i) => (
              <button
                key={servicio.id}
                type="button"
                onClick={() => irA(i)}
                aria-label={`Ver ${servicio.titulo}`}
                aria-current={activo === i ? 'true' : undefined}
                className="flex size-6 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${activo === i ? 'w-5.5 bg-brand' : 'w-2 bg-line-strong'}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
