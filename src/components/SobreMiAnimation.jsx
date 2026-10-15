// Escena de "Sobre mí": una búsqueda en Google donde el negocio del cliente sube al
// primer puesto, y una charla directa en criollo. Arranca cuando la sección entra en
// pantalla (data-visible de Reveal, ver .about-* en index.css). Sin JavaScript o con
// prefers-reduced-motion se muestra directamente el cuadro final.

const d = (ms) => ({ '--d': `${ms}ms` })

function Resultado({ titulo, url, destacado = false, className = '', style, children }) {
  return (
    <div
      className={`flex h-14 flex-col justify-center gap-1.5 rounded-xl px-4 ${
        destacado ? 'border border-accent/60 bg-accent-soft' : 'bg-surface'
      } ${className}`}
      style={style}
    >
      <span className="flex items-center gap-2">
        <span className={`size-3.5 shrink-0 rounded-full ${destacado ? 'bg-accent' : 'bg-line-strong'}`} />
        <span className={`truncate text-[0.8125rem] font-semibold ${destacado ? 'text-accent-ink' : 'text-muted'}`}>
          {titulo}
        </span>
        <span className="ml-auto truncate text-[0.6875rem] text-subtle">{url}</span>
      </span>
      <span className={`h-1.5 w-[70%] rounded-full ${destacado ? 'bg-accent/40' : 'bg-line'}`} />
      {children}
    </div>
  )
}

export default function SobreMiAnimation() {
  return (
    <div
      role="img"
      aria-label="Ilustración: en una búsqueda de Google, el sitio de tu negocio sube al primer puesto, y una charla donde te explico cada paso en criollo."
      className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-brand"
    >
      <div aria-hidden="true" className="absolute inset-0">
        {/* Buscador */}
        <div className="absolute inset-x-6 top-6 flex flex-col gap-3 rounded-2xl bg-card p-4 shadow-lg">
          <div className="flex items-center gap-2.5 rounded-full border border-line bg-field px-4 py-2">
            <svg viewBox="0 0 24 24" className="size-4 shrink-0 text-subtle" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <span className="about-type overflow-hidden text-[0.8125rem] whitespace-nowrap text-ink" style={d(200)}>
              diseño web para pymes
            </span>
            <span className="about-caret h-4 w-0.5 bg-ink" style={d(200)} />
          </div>

          {/* El negocio arranca tercero y sube al primer puesto. */}
          <div className="flex flex-col gap-2">
            <Resultado titulo="Tu negocio" url="tunegocio.com.ar" destacado className="about-climb relative z-10 shadow-md" style={d(1500)}>
              {/* Puesto alcanzado */}
              <span
                className="about-in absolute -top-3 right-3 rounded-full bg-accent px-2.5 py-0.5 text-[0.6875rem] font-bold text-on-accent shadow-md"
                style={d(2500)}
              >
                1.º en Google
              </span>
            </Resultado>
            <Resultado titulo="Competencia A" url="competencia-a.com" className="about-drop" style={d(1500)} />
            <Resultado titulo="Competencia B" url="competencia-b.com" className="about-drop" style={d(1500)} />
          </div>
        </div>

        {/* Charla directa, sin intermediarios */}
        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2">
          <div className="about-in max-w-[78%] self-start rounded-2xl rounded-bl-sm bg-card px-3.5 py-2 text-[0.8125rem] text-ink shadow-md" style={d(3000)}>
            ¿Y eso en qué me ayuda?
          </div>
          <div className="relative self-end">
            <span className="about-typing absolute right-0 bottom-0 flex gap-1 rounded-2xl rounded-br-sm bg-brand-soft px-3.5 py-3" style={d(3600)}>
              <span className="size-1.5 rounded-full bg-brand-text" />
              <span className="size-1.5 rounded-full bg-brand-text" />
              <span className="size-1.5 rounded-full bg-brand-text" />
            </span>
            <div className="about-in max-w-[19rem] rounded-2xl rounded-br-sm bg-brand-soft px-3.5 py-2 text-[0.8125rem] text-ink shadow-md" style={d(4600)}>
              Más gente te encuentra cuando busca lo que vendés. Te lo explico paso a paso.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
