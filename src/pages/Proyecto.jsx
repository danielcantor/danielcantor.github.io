import { Link, useParams } from 'react-router'
import Seo from '../components/Seo.jsx'
import CountUp from '../components/CountUp.jsx'
import Reveal from '../components/Reveal.jsx'
import ProcesoPaso from '../components/ProcesoPaso.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { ArrowUpRightIcon } from '../components/icons.jsx'
import { trabajos, getTrabajo, trabajoPath } from '../data/trabajos.js'
import { site, absoluteUrl } from '../config/site.js'
import { trackEvent } from '../lib/analytics.js'
import NotFound from './NotFound.jsx'

function jsonLd(trabajo) {
  const url = absoluteUrl(trabajoPath(trabajo.slug))
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: trabajo.titular,
      description: trabajo.resumen,
      url,
      image: absoluteUrl(trabajo.portada.src),
      dateCreated: trabajo.anio,
      creator: { '@type': 'Person', name: site.name, url: site.url },
      about: trabajo.servicios,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: site.url + '/' },
        { '@type': 'ListItem', position: 2, name: 'Trabajos', item: site.url + '/#trabajos' },
        { '@type': 'ListItem', position: 3, name: trabajo.titulo, item: url },
      ],
    },
  ]
}

function Ficha({ trabajo }) {
  const datos = [
    ['Cliente', trabajo.cliente],
    ['Rubro', trabajo.rubro],
    ['Año', trabajo.anio],
    ['Duración', trabajo.duracion],
  ]
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-[20px] border border-line bg-card p-6 text-[0.9375rem]">
      {datos.map(([dt, dd]) => (
        <div key={dt}>
          <dt className="text-[0.8125rem] text-subtle">{dt}</dt>
          <dd className="font-semibold">{dd}</dd>
        </div>
      ))}
      <div className="col-span-2">
        <dt className="text-[0.8125rem] text-subtle">Servicios</dt>
        <dd className="mt-1.5 flex flex-wrap gap-2">
          {trabajo.servicios.map((s) => (
            <span key={s} className="rounded-full border border-line bg-surface px-3 py-1 text-[0.8125rem] font-semibold">
              {s}
            </span>
          ))}
        </dd>
      </div>
      {trabajo.agencia && (
        <div className="col-span-2">
          <dt className="text-[0.8125rem] text-subtle">Contratado a través de</dt>
          <dd className="font-semibold">
            <a href={trabajo.agencia.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
              {trabajo.agencia.nombre} <ArrowUpRightIcon size={16} />
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </dd>
        </div>
      )}
      {trabajo.url && (
        <div className="col-span-2">
          <a
            href={trabajo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold"
          >
            Ver sitio en vivo <ArrowUpRightIcon size={16} />
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </div>
      )}
    </dl>
  )
}

export default function Proyecto() {
  const { slug } = useParams()
  const trabajo = getTrabajo(slug)
  if (!trabajo) return <NotFound />

  const index = trabajos.indexOf(trabajo)
  const anterior = trabajos[(index - 1 + trabajos.length) % trabajos.length]
  const siguiente = trabajos[(index + 1) % trabajos.length]

  return (
    <>
      <Seo
        title={`Caso: ${trabajo.titulo} · ${trabajo.tipo}`}
        description={trabajo.resumen}
        path={trabajoPath(trabajo.slug)}
        image={trabajo.portada.src}
        type="article"
        noindex={trabajo.ejemplo}
        jsonLd={jsonLd(trabajo)}
      />

      {trabajo.ejemplo && (
        <div role="note" className="border-b border-accent/40 bg-accent-soft text-accent-ink">
          <p className="mx-auto max-w-page px-6 py-2.5 text-sm font-medium">
            Proyecto de ejemplo: los datos y resultados son ilustrativos.
          </p>
        </div>
      )}

      <article>
        <header className="mx-auto flex max-w-page flex-col gap-8 px-6 pt-10 pb-14">
          <nav aria-label="Migas de pan" className="text-sm text-subtle">
            <ol className="flex flex-wrap gap-2">
              <li>
                <Link to="/" className="text-muted">Inicio</Link> <span aria-hidden="true">/</span>
              </li>
              <li>
                <a href="/#trabajos" className="text-muted">Trabajos</a> <span aria-hidden="true">/</span>
              </li>
              <li aria-current="page" className="font-semibold text-ink">{trabajo.titulo}</li>
            </ol>
          </nav>

          <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div className="flex flex-col gap-4.5">
              <span className="kicker">
                {trabajo.tipo}
              </span>
              <h1 className="font-display text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.08] font-extrabold tracking-[-0.025em]">
                {trabajo.titular}
              </h1>
              <p className="max-w-xl text-[1.1875rem] text-muted">{trabajo.resumen}</p>
            </div>
            <Ficha trabajo={trabajo} />
          </div>

          <img
            src={trabajo.portada.src}
            alt={trabajo.portada.alt}
            width={trabajo.portada.width}
            height={trabajo.portada.height}
            fetchpriority="high"
            className="aspect-[16/7] w-full rounded-[28px] object-cover"
          />
        </header>

        <section aria-labelledby="resultados" className="border-y border-line-soft bg-card">
          <div className="mx-auto flex max-w-page flex-col gap-6 px-6 py-14">
            <h2 id="resultados" className="font-display text-[1.375rem] font-bold">
              {trabajo.metricasTitulo}
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {trabajo.metricas.map((m) => (
                <li key={m.label} className="flex flex-col gap-1 rounded-[18px] bg-surface p-6">
                  <CountUp
                    to={m.to}
                    from={m.from}
                    decimals={m.decimals}
                    suffix={m.suffix}
                    sign={m.sign}
                    className="font-display text-[2.75rem] leading-tight font-extrabold text-brand-text"
                  />
                  <span className="text-[0.9375rem] text-muted">{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="mx-auto grid max-w-page items-start gap-10 px-6 py-14 sm:gap-14 sm:py-20 lg:grid-cols-2">
          <Reveal as="section" aria-labelledby="desafio" className="flex flex-col gap-4 lg:sticky lg:top-28">
            <p className="text-[0.9375rem] font-semibold text-brand-text">El desafío</p>
            <h2 id="desafio" className="bar-under font-display text-[clamp(1.75rem,3vw,2.4rem)] leading-tight font-extrabold tracking-[-0.02em]">
              {trabajo.desafio.titulo}
            </h2>
            {trabajo.desafio.parrafos.map((p) => (
              <p key={p} className="text-muted">{p}</p>
            ))}
          </Reveal>
          <section aria-labelledby="que-hicimos" className="flex flex-col gap-4">
            <h2 id="que-hicimos" className="text-[0.9375rem] font-semibold text-brand-text">Qué hicimos</h2>
            <ol>
              {trabajo.pasos.map((paso, i) => (
                <Reveal as="li" key={paso.titulo} delay={100 + i * 150}>
                  <ProcesoPaso
                    numero={i + 1}
                    titulo={paso.titulo}
                    descripcion={paso.descripcion}
                    ultimo={i === trabajo.pasos.length - 1}
                    tono="claro"
                    horizontal={false}
                  />
                </Reveal>
              ))}
            </ol>
          </section>
        </div>

        {(trabajo.antesDespues || trabajo.galeria.length > 0) && (
          <section aria-labelledby="antes-despues" className="bg-night text-on-night">
            <div className="mx-auto flex max-w-page flex-col gap-8 px-6 py-14 sm:py-20">
              <div className="flex flex-col gap-2.5">
                <p className="kicker text-night-text">
                  {trabajo.antesDespues ? 'Antes y después' : 'Galería'}
                </p>
                <h2 id="antes-despues" className="bar-under font-display text-[clamp(1.75rem,3vw,2.4rem)] font-extrabold tracking-[-0.02em]">
                  Así quedó el proyecto
                </h2>
              </div>
              {trabajo.antesDespues && (
                <div className="grid gap-6 md:grid-cols-2">
                  {['antes', 'despues'].map((k) => {
                    const img = trabajo.antesDespues[k]
                    return (
                      <figure key={k} className="flex flex-col gap-2.5">
                        <img
                          src={img.src}
                          alt={img.alt}
                          width="1200"
                          height="900"
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/3] w-full rounded-[18px] object-cover"
                        />
                        <figcaption className="text-sm text-night-text">
                          <strong className="text-on-night">{k === 'antes' ? 'Antes:' : 'Después:'}</strong> {img.caption}
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
                        className="aspect-[4/3] w-full rounded-[14px] object-cover"
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}

        <div className="mx-auto grid max-w-page items-center gap-8 px-6 py-14 sm:gap-12 sm:py-20 lg:grid-cols-2">
          {trabajo.testimonio && (
            <figure className="flex flex-col gap-5 rounded-3xl border border-line bg-card p-8 sm:p-10">
              <blockquote className="font-display text-[1.375rem] leading-snug font-semibold">
                “{trabajo.testimonio.texto}”
              </blockquote>
              <figcaption className="flex flex-col">
                <span className="font-semibold">{trabajo.testimonio.nombre}</span>
                <span className="text-sm text-subtle">
                  {trabajo.testimonio.cargo}, {trabajo.cliente}
                </span>
              </figcaption>
            </figure>
          )}
          <section aria-labelledby="herramientas" className="flex flex-col gap-4">
            <h2 id="herramientas" className="bar-under font-display text-2xl font-bold">Herramientas usadas</h2>
            <ul className="flex flex-wrap gap-2.5">
              {trabajo.herramientas.map((h) => (
                <li key={h} className="rounded-[10px] border border-line-strong bg-card px-3.5 py-2 text-sm font-medium">
                  {h}
                </li>
              ))}
            </ul>
            <p className="text-[0.9375rem] text-muted">
              Los resultados dependen del punto de partida de cada negocio. En el diagnóstico inicial te digo qué se
              puede esperar en tu caso.
            </p>
          </section>
        </div>
      </article>

      <section aria-labelledby="cta" className="mx-auto max-w-page px-6 pb-20">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-[28px] bg-brand px-8 py-12 text-on-night sm:px-12 sm:py-14">
          <div className="flex max-w-xl flex-col gap-2.5">
            <h2 id="cta" className="font-display text-[clamp(1.75rem,3vw,2.4rem)] leading-tight font-extrabold tracking-[-0.02em]">
              {trabajo.cta}
            </h2>
            <p className="text-night-text">Contame tu caso y te propongo por dónde empezar.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#contacto"
              onClick={() => trackEvent('cta_click', { cta: 'diagnostico', ubicacion: 'proyecto', proyecto: trabajo.slug })}
              className="btn btn-light btn-bar h-13.5 px-6.5"
            >
              Pedí tu diagnóstico
            </a>
            <WhatsAppButton ubicacion="proyecto" message={`Hola Daniel, vi el caso de ${trabajo.titulo} y quiero consultarte por`}>
              WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <nav aria-label="Otros proyectos" className="mx-auto grid max-w-page gap-5 px-6 pb-20 sm:grid-cols-2">
        {[
          ['← Proyecto anterior', anterior, 'items-start text-left'],
          ['Proyecto siguiente →', siguiente, 'items-end text-right'],
        ].map(([label, t, align]) => (
          <Link
            key={label}
            to={trabajoPath(t.slug)}
            className={`flex flex-col gap-1 rounded-[18px] border border-line bg-card p-6 text-ink no-underline hover:border-brand ${align}`}
          >
            <span className="text-sm text-subtle">{label}</span>
            <span className="font-display text-xl font-bold">{t.titulo}</span>
            <span className="text-sm font-semibold text-brand-text">{t.tipo}</span>
          </Link>
        ))}
      </nav>
    </>
  )
}
