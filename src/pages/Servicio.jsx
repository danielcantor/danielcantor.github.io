import { useState } from 'react'
import { Link, useParams } from 'react-router'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProcesoPaso from '../components/ProcesoPaso.jsx'
import TrabajoFila from '../components/TrabajoFila.jsx'
import AccordionItem from '../components/AccordionItem.jsx'
import Contacto from '../components/Contacto.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Acento from '../components/Acento.jsx'
import { getServicio } from '../data/landings.js'
import { servicios } from '../data/servicios.js'
import { getTrabajos } from '../data/trabajos.js'
import { site } from '../config/site.js'
import { sitio, persona, faqPage, servicioSchema } from '../data/schema.js'
import { useLang, homePath, sectionHref, servicioPath } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'
import NotFound from './NotFound.jsx'

const seccion = 'mx-auto max-w-page px-4 pt-24 sm:px-6 sm:pt-32 lg:px-10'

function Preguntas({ preguntas }) {
  const [abiertos, setAbiertos] = useState(() => new Set([0]))

  function toggle(i) {
    if (!abiertos.has(i)) trackEvent('faq_open', { pregunta: preguntas[i].pregunta })
    setAbiertos((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <div className="filas mt-4">
      {preguntas.map((item, i) => (
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
  )
}

export default function Servicio() {
  const { slug } = useParams()
  const lang = useLang()
  const servicio = getServicio(slug, lang)
  if (!servicio) return <NotFound />
  // La key reinicia el formulario y las preguntas abiertas al pasar de un servicio a otro.
  return <Landing key={servicio.id} servicio={servicio} lang={lang} />
}

function Landing({ servicio, lang }) {
  const t = ui[lang].servicio
  const indice = servicios[lang].findIndex((s) => s.id === servicio.id)
  const otros = servicios[lang].filter((s) => s.id !== servicio.id)
  const casos = getTrabajos(lang).filter((trabajo) => !trabajo.ejemplo && trabajo.servicios.includes(servicio.titulo))
  // Las secciones se numeran en el orden en que aparecen: los casos dependen de los datos.
  let numero = 0
  const n = () => String(++numero).padStart(2, '0')

  const cta = (ubicacion) => () => trackEvent('cta_click', { cta: 'diagnostico', ubicacion, servicio: servicio.id })

  return (
    <>
      <Seo
        title={servicio.seoTitle}
        description={servicio.seoDescription}
        path={servicioPath(servicio.slugs, lang)}
        alternates={{ es: servicioPath(servicio.slugs, 'es'), en: servicioPath(servicio.slugs, 'en') }}
        jsonLd={[sitio, persona(lang), ...servicioSchema(servicio, lang), faqPage(lang, servicio.faq)]}
      />

      <header className="mx-auto flex max-w-page flex-col gap-8 px-4 pt-6 pb-10 sm:gap-12 sm:px-6 sm:pt-10 sm:pb-14 lg:px-10">
        <nav aria-label={t.migas} className="text-sm text-muted">
          <ol className="flex flex-wrap gap-1.5">
            <li>
              <Link to={homePath(lang)} className="underline-offset-4 hover:underline">{t.inicio}</Link> <span aria-hidden="true">/</span>
            </li>
            <li>
              <a href={sectionHref(lang, 'servicios')} className="underline-offset-4 hover:underline">{t.servicios}</a> <span aria-hidden="true">/</span>
            </li>
            <li aria-current="page" className="font-semibold text-ink">{servicio.corto}</li>
          </ol>
        </nav>

        <div className="flex flex-col gap-4 sm:gap-6">
          <p className="text-sm text-muted">
            <span className="font-semibold text-accent-text">({t.servicio} {String(indice + 1).padStart(2, '0')}) </span>
            {servicio.eyebrow}
          </p>
          <h1 className="hero-titulo max-w-[74rem] text-[clamp(2.5rem,7vw,6rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance">
            <span className="hero-texto">
              <Acento partes={servicio.h1} />
              <span aria-hidden="true" className="barra hero-barra text-accent" />
            </span>
          </h1>
        </div>

        <div className="hero-regla grid gap-x-6 gap-y-6 border-t border-ink pt-4 sm:pt-6 lg:grid-cols-12">
          <p style={{ '--i': 1 }} className="text-[1.0625rem] leading-[1.45] sm:text-xl lg:col-span-7">
            {servicio.bajada}
          </p>
          <div data-oculta-barra-cta style={{ '--i': 2 }} className="flex flex-col items-start gap-3 lg:col-span-4 lg:col-start-9">
            <a href="#contacto" onClick={cta('hero_servicio')} className="btn btn-accent h-14 w-full justify-between px-6.5 sm:w-auto sm:justify-center">
              {ui[lang].cta.diagnostico} <span aria-hidden="true">→</span>
            </a>
            <p className="text-sm text-muted">{ui[lang].hero.nota}</p>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-4 text-[0.9375rem] lg:grid-cols-4">
          {servicio.ficha.map(([dt, dd]) => (
            <div key={dt} className="flex flex-col gap-1">
              <dt className="text-[0.8125rem] text-muted">{dt}</dt>
              <dd className="font-medium">{dd}</dd>
            </div>
          ))}
        </dl>
      </header>

      <Reveal as="section" aria-labelledby="problema" className={seccion}>
        <SectionHeading id="problema" numero={n()} eyebrow={t.problema} title={<Acento partes={servicio.sintomas.titulo} />}>
          <ul className="mt-4 grid gap-x-6 sm:grid-cols-2">
            {servicio.sintomas.items.map((item) => (
              <li
                key={item}
                className="flex gap-4 border-t border-line py-5 text-[1.1875rem] leading-snug tracking-[-0.01em] sm:py-6 sm:text-[1.375rem]"
              >
                <span aria-hidden="true" className="serif text-[1.5rem] leading-none text-accent-text sm:text-[1.75rem]">×</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-2xl border-t border-line pt-5 text-soft">{t.sintomasCierre}</p>
        </SectionHeading>
      </Reveal>

      <section aria-labelledby="incluye" className={seccion}>
        <SectionHeading
          id="incluye"
          numero={n()}
          eyebrow={t.incluye}
          title={<Acento partes={t.incluyeTitulo(servicio.incluye.length)} />}
          intro={servicio.descripcion}
        >
          <ul className="filas mt-4">
            {servicio.incluye.map((item, i) => (
              <Reveal
                as="li"
                key={item.titulo}
                delay={i * 80}
                className="grid grid-cols-[2.25rem_1fr] gap-x-3 gap-y-1 py-4 sm:py-5.5 md:grid-cols-[3.5rem_minmax(0,4fr)_minmax(0,6fr)] md:gap-6"
              >
                <span aria-hidden="true" className="serif text-[1.375rem] leading-none text-accent-text sm:text-2xl">+</span>
                <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em] sm:text-[1.375rem]">{item.titulo}</h3>
                <p className="col-start-2 text-[0.9375rem] text-soft md:col-auto md:text-base">{item.descripcion}</p>
              </Reveal>
            ))}
          </ul>
        </SectionHeading>
      </section>

      <section aria-labelledby="proceso" className={seccion}>
        <SectionHeading id="proceso" numero={n()} eyebrow={t.proceso} title={<Acento partes={t.procesoTitulo} />}>
          <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicio.pasos.map((paso, i) => (
              <Reveal as="li" key={paso.titulo} delay={i * 120}>
                <ProcesoPaso numero={i + 1} titulo={paso.titulo} descripcion={paso.descripcion} etiqueta={ui[lang].proceso.paso} />
              </Reveal>
            ))}
          </ol>
        </SectionHeading>
      </section>

      {casos.length > 0 && (
        <Reveal as="section" aria-labelledby="casos" className={seccion}>
          <SectionHeading id="casos" numero={n()} eyebrow={t.casos} title={<Acento partes={t.casosTitulo} />}>
            <div className="filas mt-4">
              {casos.map((trabajo, i) => (
                <TrabajoFila key={trabajo.slug} trabajo={trabajo} numero={i + 1} lang={lang} />
              ))}
            </div>
          </SectionHeading>
        </Reveal>
      )}

      <Reveal as="section" aria-labelledby="faq" className={seccion}>
        <SectionHeading id="faq" numero={n()} eyebrow={t.faq} title={<Acento partes={t.faqTitulo} />}>
          <Preguntas preguntas={servicio.faq} />
        </SectionHeading>
      </Reveal>

      <section aria-labelledby="cta-servicio" className={`${seccion} pb-24 sm:pb-32`}>
        <div className="grid gap-x-6 gap-y-6 border-t border-ink pt-6 lg:grid-cols-12 lg:items-end">
          <h2 id="cta-servicio" className="text-[clamp(2.125rem,5vw,4rem)] leading-none font-semibold tracking-[-0.04em] text-balance lg:col-span-8">
            {servicio.cta}
          </h2>
          <div className="flex flex-col items-start gap-2 lg:col-span-4">
            <a href="#contacto" onClick={cta('cierre_servicio')} className="btn btn-accent h-14 w-full justify-between px-6.5 sm:w-auto sm:justify-center">
              {ui[lang].cta.diagnostico} <span aria-hidden="true">→</span>
            </a>
            {lang === 'en' ? (
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(t.asuntoEmail(servicio.titulo))}`}
                onClick={() => trackEvent('click_email', { ubicacion: 'servicio' })}
                className="inline-flex min-h-11 items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                {ui[lang].proyecto.escribime} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <WhatsAppButton ubicacion="servicio" variante="link" message={t.mensajeContacto(servicio.titulo)}>
                WhatsApp
              </WhatsAppButton>
            )}
          </div>
        </div>

        <nav aria-labelledby="otros-servicios" className="mt-20 sm:mt-28">
          <p id="otros-servicios" className="text-sm text-muted">{t.otros}</p>
          <ul className="filas mt-4">
            {otros.map((otro) => (
              <li key={otro.id}>
                <Link
                  to={servicioPath(otro.slugs, lang)}
                  onClick={() => trackEvent('select_content', { content_type: 'servicio', content_id: otro.id })}
                  className="group grid gap-x-6 gap-y-1.5 py-5 no-underline sm:py-6 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_auto] md:items-baseline"
                >
                  <span className="text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-semibold tracking-[-0.035em] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-6">
                    {otro.titulo}
                  </span>
                  <span className="text-soft">{otro.descripcion}</span>
                  <span className="text-[0.9375rem] font-semibold whitespace-nowrap text-accent-text">
                    {t.verServicio} <span aria-hidden="true">&nbsp;→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <Contacto numero={n()} servicio={servicio.titulo} />
    </>
  )
}
