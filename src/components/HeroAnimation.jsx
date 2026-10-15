import { useState } from 'react'
import CountUp from './CountUp.jsx'

// Escena animada del hero: se escribe código, se arma un sitio y aparecen los
// resultados. Un ciclo dura 10 s (ver .hero-scene en index.css); al terminar,
// la escena se vuelve a montar para repetir la animación y los contadores.
// Con prefers-reduced-motion se muestra directamente el cuadro final.

// Colores de sintaxis del editor (siempre sobre fondo oscuro).
const C = { tag: '#d6a8ff', attr: '#7fb4ff', str: '#f2a774', fn: '#8bd5a1', txt: '#7d88a8' }

// Cada línea: sangría y "tokens" (ancho en % y color).
const CODIGO = [
  [0, [[16, C.tag], [34, C.attr]]],
  [1, [[20, C.attr], [36, C.str]]],
  [1, [[24, C.fn], [18, C.txt], [14, C.attr]]],
  [2, [[42, C.str]]],
  [2, [[26, C.fn], [24, C.txt]]],
  [1, [[30, C.attr], [14, C.tag]]],
  [1, [[16, C.tag], [36, C.str], [10, C.txt]]],
  [0, [[22, C.tag]]],
  [0, [[18, C.attr], [30, C.fn]]],
]

const d = (ms) => ({ '--d': `${ms}ms` })

// TODO: si querés, reemplazá los resultados por datos reales de tus clientes.
export default function HeroAnimation() {
  const [ciclo, setCiclo] = useState(0)

  function onAnimationEnd(event) {
    if (event.target === event.currentTarget && event.animationName === 'hero-scene') {
      setCiclo((c) => c + 1)
    }
  }

  return (
    <div
      role="img"
      aria-label="Animación: se escribe el código de un sitio web, el sitio se arma y aparecen sus resultados: +180% de visitas orgánicas, velocidad 98 sobre 100 y Top 3 en Google."
      className="relative aspect-[5/4] overflow-hidden rounded-[28px] bg-brand"
    >
      <div key={ciclo} aria-hidden="true" className="hero-scene absolute inset-0" onAnimationEnd={onAnimationEnd}>
        {/* Ventana del navegador */}
        <div className="absolute inset-x-3 top-3 bottom-[19%] flex flex-col overflow-hidden rounded-xl bg-card shadow-lg sm:inset-x-6 sm:top-6 sm:bottom-[22%]">
          <div className="flex h-6 shrink-0 items-center gap-1.5 bg-line px-2.5 sm:h-7 sm:px-3">
            <span className="size-2 rounded-full bg-line-strong sm:size-2.5" />
            <span className="size-2 rounded-full bg-line-strong sm:size-2.5" />
            <span className="size-2 rounded-full bg-line-strong sm:size-2.5" />
            <span className="ml-2 truncate rounded-full bg-card px-2 py-px text-[9px] text-subtle sm:text-[10px]">
              danielcantor.com.ar
            </span>
          </div>

          <div className="grid min-h-0 flex-1 grid-cols-[44%_1fr]">
            {/* Editor */}
            <div className="flex flex-col gap-[7%] bg-night px-2 py-3 sm:px-3 sm:py-4">
              {CODIGO.map(([sangria, tokens], i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="w-3 shrink-0 text-right font-mono text-[8px] leading-none text-[#4b5678] sm:text-[9px]">
                    {i + 1}
                  </span>
                  <div
                    className="hero-grow flex h-1.5 flex-1 gap-1 sm:h-2"
                    style={{ ...d(300 + i * 320), paddingLeft: `${sangria * 9}%` }}
                  >
                    {tokens.map(([ancho, color], j) => (
                      <span key={j} className="h-full rounded-full" style={{ width: `${ancho}%`, background: color }} />
                    ))}
                  </div>
                </div>
              ))}
              <span className="hero-caret ml-4.5 h-2.5 w-0.5 bg-[#f5f7fb] sm:h-3" style={d(3300)} />
            </div>

            {/* Sitio que se arma */}
            <div className="flex flex-col gap-[6%] bg-surface p-2.5 sm:p-3.5">
              <div className="hero-in flex items-center justify-between" style={d(1300)}>
                <span className="h-1.5 w-7 rounded-full bg-brand sm:h-2 sm:w-9" />
                <span className="flex gap-1">
                  <span className="h-1 w-3 rounded-full bg-line-strong sm:w-4" />
                  <span className="h-1 w-3 rounded-full bg-line-strong sm:w-4" />
                  <span className="h-1 w-3 rounded-full bg-line-strong sm:w-4" />
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="hero-grow h-2 w-[85%] rounded-full bg-ink sm:h-3" style={d(1800)} />
                <span className="hero-grow h-2 w-[60%] rounded-full bg-brand-text sm:h-3" style={d(2100)} />
              </div>
              <span className="hero-grow h-1 w-[75%] rounded-full bg-line-strong sm:h-1.5" style={d(2500)} />
              <div className="hero-in flex gap-1.5" style={d(2900)}>
                <span className="h-2.5 w-10 rounded-full bg-accent sm:h-3.5 sm:w-14" />
                <span className="h-2.5 w-8 rounded-full border border-ink sm:h-3.5 sm:w-11" />
              </div>
              <div className="mt-auto grid grid-cols-3 gap-1 sm:gap-1.5">
                {[3400, 3600, 3800].map((ms) => (
                  <span key={ms} className="hero-in flex aspect-[4/5] flex-col gap-1 rounded-md border border-line bg-card p-1" style={d(ms)}>
                    <span className="h-[45%] rounded-sm bg-brand-soft" />
                    <span className="h-1 w-[80%] rounded-full bg-line-strong" />
                    <span className="h-1 w-[55%] rounded-full bg-line" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Velocidad */}
        <div
          className="hero-in absolute top-[16%] right-2 flex items-center gap-2 rounded-xl bg-card px-2 py-1.5 shadow-md sm:right-3 sm:px-3 sm:py-2"
          style={d(4600)}
        >
          <svg viewBox="0 0 36 36" className="size-7 -rotate-90 sm:size-9">
            <circle cx="18" cy="18" r="15" fill="none" strokeWidth="4" className="stroke-line" />
            <circle
              cx="18"
              cy="18"
              r="15"
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="94.25"
              strokeDashoffset="1.9"
              className="hero-gauge stroke-[#1f7a4d] dark:stroke-[#4ade80]"
              style={d(4700)}
            />
          </svg>
          <span className="flex flex-col leading-tight">
            <CountUp to={98} delay={4700} duration={1200} className="font-display text-sm font-extrabold sm:text-base" />
            <span className="text-[9px] text-muted sm:text-[11px]">Velocidad</span>
          </span>
        </div>

        {/* Top 3 en Google */}
        <div
          className="hero-in absolute right-2 bottom-[33%] rounded-full sm:bottom-[27%] bg-accent px-2.5 py-1 text-[10px] font-bold text-on-accent shadow-md sm:right-3 sm:px-3 sm:text-xs"
          style={d(6600)}
        >
          Top 3 en Google
        </div>

        {/* Resultado destacado */}
        <div
          className="hero-in absolute bottom-3 left-3 flex flex-col rounded-xl bg-card px-3 py-2 shadow-md sm:bottom-6 sm:left-6 sm:gap-0.5 sm:rounded-2xl sm:px-5 sm:py-3.5"
          style={d(5300)}
        >
          <span className="text-[10px] text-muted sm:text-[13px]">Resultado destacado</span>
          <span className="font-display text-[15px] font-bold sm:text-[24px]">
            <CountUp to={180} sign suffix="%" delay={5300} duration={1400} /> visitas orgánicas
          </span>
        </div>
      </div>
    </div>
  )
}
