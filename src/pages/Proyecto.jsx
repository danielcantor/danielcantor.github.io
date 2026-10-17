import { Link, useParams } from 'react-router'
import Seo from '../components/Seo.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ProcesoPaso from '../components/ProcesoPaso.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Acento from '../components/Acento.jsx'
import { getTrabajos } from '../data/trabajos.js'
import { contactoHref } from '../data/navegacion.js'
import { site, absoluteUrl } from '../config/site.js'
import { persona, sitio } from '../data/schema.js'
import { useLang, homePath, sectionHref, trabajoPath } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'
import NotFound from './NotFound.jsx'

function jsonLd(trabajo, lang) {
  const t = ui[lang].proyecto
  const autor = persona(lang)
  const url = absoluteUrl(trabajoPath(trabajo.slug, lang))
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: trabajo.titular,
      description: trabajo.resumen,
      url,
      image: absoluteUrl(trabajo.portada.src),
      dateCreated: trabajo.anio,
      inLanguage: ui[lang].htmlLang,
      creator: { '@type': 'Person', '@id': autor['@id'], name: autor.name, url: autor.url },
      isPartOf: { '@type': 'WebSite', '@id': sitio['@id'], name: sitio.name, url: sitio.url },
      about: trabajo.servicios,
      keywords: trabajo.herramientas.join(', '),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.inicio, item: absoluteUrl(homePath(lang)) },
        { '@type': 'ListItem', position: 2, name: t.trabajos, item: absoluteUrl(sectionHref(lang, 'trabajos')) },
        { '@type': 'ListItem', position: 3, name: trabajo.titulo, item: url },
      ],
    },
  ]
}

// El titular sin el nombre del cliente (ya está en las migas y la ficha), con el final en serif.
function Titular({ trabajo }) {
  const prefijo = `${trabajo.titulo}:`
  let texto = trabajo.titular.startsWith(prefijo) ? trabajo.titular.slice(prefijo.length).trim() : trabajo.titular
  texto = texto.charAt(0).toUpperCase() + texto.slice(1)
  const acento = trabajo.titularAcento
  const conAcento = acento && texto.endsWith(acento)
  return (
    <>
      {conAcento ? texto.slice(0, -acento.length) : texto}
      {conAcento && <span className="serif">{acento}</span>}
      <span aria-hidden="true" className="barra text-accent" />
    </>
  )
}

const linkExterno = 'font-semibold text-accent-text underline-offset-4 hover:underline'

function Ficha({ trabajo, t, nuevaPestana }) {
  const datos = [
    [t.cliente, trabajo.cliente],
    [t.rubro, trabajo.rubro],
    [t.anioDuracion, `${trabajo.anio} · ${trabajo.duracion}`],
    [t.servicios, trabajo.servicios.join(' · ')],
  ]
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink pt-4 text-[0.9375rem] lg:grid-cols-6">
      {datos.map(([dt, dd]) => (
        <div key={dt} className="flex flex-col gap-1">
          <dt className="text-[0.8125rem] text-muted">{dt}</dt>
          <dd>{dd}</dd>
        </div>
      ))}
      {trabajo.agencia && (
        <div className="flex flex-col gap-1">
          <dt className="text-[0.8125rem] text-muted">{t.juntoA}</dt>
          <dd>
            <a href={trabajo.agencia.url} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
              {trabajo.agencia.nombre}
              <span className="sr-only">{nuevaPestana}</span>
            </a>{' '}
            {t.agencia}
          </dd>
        </div>
      )}
      {trabajo.url && (
        <div className="flex flex-col gap-1">
          <dt className="text-[0.8125rem] text-muted">{t.sitio}</dt>
          <dd>
            <a href={trabajo.url} target="_blank" rel="noopener noreferrer" className={linkExterno}>
              {trabajo.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗
              <span className="sr-only">{nuevaPestana}</span>
            </a>
          </dd>
        </div>
      )}
    </dl>
  )
}

const seccion = 'mx-auto max-w-page px-4 pt-24 sm:px-6 sm:pt-32 lg:px-10'

export default function Proyecto() {
  const { slug } = useParams()
  const lang = useLang()
  const t = ui[lang].proyecto
  const nuevaPestana = ui[lang].nuevaPestana
  const trabajos = getTrabajos(lang)
  const trabajo = trabajos.find((item) => item.slug === slug)
  if (!trabajo) return <NotFound />

  const index = trabajos.indexOf(trabajo)
  const siguiente = trabajos[(index + 1) % trabajos.length]
  // Las secciones se numeran en el orden en que aparecen: algunas dependen de los datos del caso.
  let numero = 0
  const n = () => String(++numero).padStart(2, '0')

  return (
    <>
      <Seo
        title={t.seoTitle(trabajo)}
        description={trabajo.resumen}
        path={trabajoPath(trabajo.slug, lang)}
        alternates={{ es: trabajoPath(trabajo.slug, 'es'), en: trabajoPath(trabajo.slug, 'en') }}
        image={trabajo.portada.src}
        imageAlt={trabajo.portada.alt}
        imageWidth={trabajo.portada.width}
        imageHeight={trabajo.portada.height}
        type="article"
        noindex={trabajo.ejemplo}
        jsonLd={jsonLd(trabajo, lang)}
      />

      {trabajo.ejemplo && (
        <div role="note" className="bg-accent text-on-accent">
          <p className="mx-auto max-w-page px-4 py-2.5 text-sm font-medium sm:px-6 lg:px-10">
            {t.ejemplo}
          </p>
        </div>
      )}

      <article>
        <header className="mx-auto flex max-w-page flex-col gap-8 px-4 pt-6 pb-10 sm:gap-10 sm:px-6 sm:pt-10 lg:px-10">
          <nav aria-label={t.migas} className="text-sm text-muted">
            <ol className="flex flex-wrap gap-1.5">
              <li>
                <Link to={homePath(lang)} className="underline-offset-4 hover:underline">{t.inicio}</Link> <span aria-hidden="true">/</span>
              </li>
              <li>
                <a href={sectionHref(lang, 'trabajos')} className="underline-offset-4 hover:underline">{t.trabajos}</a> <span aria-hidden="true">/</span>
              </li>
              <li aria-current="page" className="font-semibold text-ink">{trabajo.titulo}</li>
            </ol>
          </nav>

          <div className="grid gap-x-6 gap-y-5 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col gap-4 lg:col-span-8 sm:gap-5">
              <p className="text-sm text-muted">
                <span className="font-semibold text-accent-text">({t.caso} {String(index + 1).padStart(2, '0')}) </span>
                {trabajo.tipo}
              </p>
              <h1 className="text-[clamp(2.5rem,6.2vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance">
                <Titular trabajo={trabajo} />
              </h1>
            </div>
            <p className="text-soft sm:text-lg lg:col-span-4">{trabajo.resumen}</p>
          </div>

          <Ficha trabajo={trabajo} t={t} nuevaPestana={nuevaPestana} />
        </header>

        <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-10">
          <div className="overflow-hidden rounded-md bg-panel px-4 pt-5 sm:px-14 sm:pt-12 lg:px-20 lg:pt-16">
            <img
              src={trabajo.portada.src}
              alt={trabajo.portada.alt}
              width={trabajo.portada.width}
              height={trabajo.portada.height}
              fetchpriority="high"
              className="scroll-acerca aspect-[4/3] w-full rounded-t-md object-cover object-top shadow-[0_30px_60px_-30px_rgba(15,27,61,0.45)] sm:aspect-[16/7]"
            />
          </div>
        </div>

        <section aria-labelledby="resultados" className={seccion}>
          <SectionHeading numero={n()} eyebrow={trabajo.metricasTitulo}>
            <h2 id="resultados" className="sr-only">{trabajo.metricasTitulo}</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6 lg:grid-cols-4">
              {trabajo.metricas.map((m) => (
                <li key={m.label} className="flex flex-col gap-2 border-t border-line pt-3.5">
                  <p className="text-[clamp(2.75rem,5vw,4rem)] leading-none font-semibold tracking-[-0.04em]">
                    {m.from != null && (
                      <>
                        <s className="serif text-muted decoration-2">{m.from}</s>{' '}
                        <span className="sr-only">{t.pasoA}</span>
                      </>
                    )}
                    <CountUp to={m.to} decimals={m.decimals} suffix={m.suffix} sign={m.sign} />
                  </p>
                  <span className="text-sm text-soft sm:text-[0.9375rem]">{m.label}</span>
                </li>
              ))}
            </ul>
          </SectionHeading>
        </section>

        <Reveal as="section" aria-labelledby="desafio" className={seccion}>
          <SectionHeading id="desafio" numero={n()} eyebrow={t.desafio} title={trabajo.desafio.titulo}>
            <div className="mt-2 grid gap-6 text-soft sm:text-lg md:grid-cols-2 md:gap-8">
              {trabajo.desafio.parrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </SectionHeading>
        </Reveal>

        {(trabajo.antesDespues || trabajo.galeria.length > 0) && (
          <section aria-labelledby="antes-despues" className={seccion}>
            <SectionHeading numero={n()} eyebrow={trabajo.antesDespues ? t.antesDespues : t.galeria}>
              <h2 id="antes-despues" className="sr-only">{t.asiQuedo}</h2>
              {trabajo.antesDespues && (
                <div className="grid gap-8 md:grid-cols-2 md:gap-6">
                  {['antes', 'despues'].map((k) => {
                    const img = trabajo.antesDespues[k]
                    const despues = k === 'despues'
                    return (
                      <figure key={k} className="flex flex-col gap-3">
                        <div className={`overflow-hidden rounded-md px-3.5 pt-3.5 sm:px-6 sm:pt-6 ${despues ? 'bg-inverse' : 'bg-panel'}`}>
                          <img
                            src={img.src}
                            alt={img.alt}
                            width="1200"
                            height="900"
                            loading="lazy"
                            decoding="async"
                            className={`aspect-[4/3] w-full rounded-t object-cover object-top ${despues ? '' : 'grayscale-50 dark:brightness-85'}`}
                          />
                        </div>
                        <figcaption className="text-sm text-soft sm:text-[0.9375rem]">
                          <strong className={despues ? 'text-accent-text' : 'text-ink'}>{despues ? t.despues : t.antes}</strong> {img.caption}
                        </figcaption>
                      </figure>
                    )
                  })}
                </div>
              )}
              {trabajo.galeria.length > 0 && (
                <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {trabajo.galeria.map((img) => (
                    <li key={img.src}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        width="800"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full rounded-md object-cover"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </SectionHeading>
          </section>
        )}

        <section aria-labelledby="que-hicimos" className={seccion}>
          <SectionHeading
            id="que-hicimos"
            numero={n()}
            eyebrow={t.queHicimos}
            title={<Acento partes={t.pasos(trabajo.pasos.length)} />}
          >
            <ol className="filas mt-4">
              {trabajo.pasos.map((paso, i) => (
                <Reveal as="li" key={paso.titulo} delay={i * 80}>
                  <ProcesoPaso numero={i + 1} titulo={paso.titulo} descripcion={paso.descripcion} variante="fila" etiqueta={ui[lang].proceso.paso} />
                </Reveal>
              ))}
            </ol>
          </SectionHeading>
        </section>

        {trabajo.testimonio && (
          <section aria-label={t.testimonio} className={seccion}>
            <SectionHeading numero={n()} eyebrow={t.diceCliente}>
              <figure className="flex flex-col gap-5">
                <blockquote className="serif text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.15]">“{trabajo.testimonio.texto}”</blockquote>
                <figcaption className="text-[0.9375rem]">
                  <span className="font-semibold">{trabajo.testimonio.nombre}</span>
                  <span className="text-muted">
                    {' '}
                    — {trabajo.testimonio.cargo}, {trabajo.cliente}
                  </span>
                </figcaption>
              </figure>
            </SectionHeading>
          </section>
        )}

        <section aria-labelledby="herramientas" className={`${seccion} pb-24 sm:pb-32`}>
          <SectionHeading numero={n()} eyebrow={t.herramientas}>
            <h2 id="herramientas" className="sr-only">{t.herramientasUsadas}</h2>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[1.1875rem] leading-snug tracking-[-0.01em] sm:text-[1.625rem]">
              {trabajo.herramientas.map((h, i) => (
                <li key={h}>
                  {i > 0 && (
                    <span aria-hidden="true" className="mr-3 text-accent-text">
                      /
                    </span>
                  )}
                  {h}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted">
              {t.aviso}
            </p>
          </SectionHeading>
        </section>
      </article>

      <section aria-labelledby="cta" data-oculta-barra-cta className="bg-night text-on-night">
        <div className="mx-auto grid max-w-page gap-x-6 gap-y-8 px-4 py-16 sm:px-6 sm:py-22 lg:grid-cols-12 lg:items-end lg:px-10">
          <div className="flex flex-col gap-4 lg:col-span-8">
            <p className="text-sm text-night-text">
              <span className="font-semibold text-night-accent">({n()}) </span>
              {t.parecido}
            </p>
            <h2 id="cta" className="text-[clamp(2.125rem,5vw,4rem)] leading-none font-semibold tracking-[-0.04em] text-balance">
              {trabajo.cta}
            </h2>
            <p className="text-night-text sm:text-lg">{t.ctaBajada}</p>
          </div>
          <div className="flex flex-col items-start gap-2 lg:col-span-4">
            <a
              href={contactoHref(lang)}
              onClick={() => trackEvent('cta_click', { cta: 'diagnostico', ubicacion: 'proyecto', proyecto: trabajo.slug })}
              className="btn btn-accent h-14 w-full justify-between px-6.5 sm:w-auto sm:justify-center"
            >
              {ui[lang].cta.diagnostico} <span aria-hidden="true">→</span>
            </a>
            {lang === 'en' ? (
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(t.asuntoEmail(trabajo.titulo))}`}
                onClick={() => trackEvent('click_email', { ubicacion: 'proyecto' })}
                className="inline-flex min-h-11 items-center gap-1.5 font-medium underline-offset-4 hover:underline"
              >
                {t.escribime} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <WhatsAppButton ubicacion="proyecto" variante="link" message={t.mensajeContacto(trabajo.titulo)}>
                WhatsApp
              </WhatsAppButton>
            )}
          </div>
        </div>
      </section>

      {siguiente !== trabajo && (
        <nav aria-label={t.otros} className="mx-auto max-w-page px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
          <Link
            to={trabajoPath(siguiente.slug, lang)}
            className="group grid grid-cols-[6rem_1fr] items-center gap-x-4 no-underline lg:grid-cols-12 lg:gap-x-6"
          >
            <span className="col-start-2 row-start-1 self-end text-sm text-muted lg:col-span-3 lg:col-start-1 lg:self-center">{t.siguiente}</span>
            <span className="col-start-2 row-start-2 text-[clamp(1.875rem,5vw,4.5rem)] leading-none font-semibold tracking-[-0.045em] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-8 lg:col-span-6 lg:col-start-4 lg:row-start-1">
              {siguiente.titulo} <span className="text-accent-text">→</span>
            </span>
            <img
              src={siguiente.imagen.src}
              alt=""
              width={siguiente.imagen.width}
              height={siguiente.imagen.height}
              loading="lazy"
              decoding="async"
              className="col-start-1 row-span-2 row-start-1 aspect-[4/3] w-full rounded object-cover lg:col-span-3 lg:col-start-10 lg:row-span-1"
            />
          </Link>
        </nav>
      )}
    </>
  )
}
