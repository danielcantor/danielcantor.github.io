// Sección con grilla de estudio: a la izquierda la etiqueta numerada "(02) Trabajos",
// a la derecha el H2, la bajada opcional y el contenido (children).
export default function SectionHeading({ id, numero, eyebrow, title, intro, dark = false, className = '', children }) {
  return (
    <div className={`grid gap-x-6 gap-y-4 lg:grid-cols-12 ${className}`}>
      <p className={`text-sm lg:col-span-3 ${dark ? 'text-night-text' : 'text-muted'}`}>
        {numero && <span className={`font-semibold ${dark ? 'text-night-accent' : 'text-accent-text'}`}>({numero}) </span>}
        {eyebrow}
      </p>
      <div className="flex min-w-0 flex-col gap-4 lg:col-span-9">
        {title && (
          <h2 id={id} className="sube text-[clamp(2rem,4.2vw,3.375rem)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance">
            {title}
          </h2>
        )}
        {intro && <p className={`max-w-2xl text-[1.0625rem] ${dark ? 'text-night-text' : 'text-soft'}`}>{intro}</p>}
        {children}
      </div>
    </div>
  )
}
