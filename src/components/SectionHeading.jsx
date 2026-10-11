// Encabezado de sección: antetítulo, H2 y bajada opcional.
export default function SectionHeading({ id, eyebrow, title, intro, dark = false, className = '' }) {
  return (
    <div className={`flex max-w-3xl flex-col gap-2 sm:gap-3 ${className}`}>
      <p className={`text-sm font-semibold sm:text-[15px] ${dark ? 'text-[#f2a774]' : 'text-brand-text'}`}>{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-[clamp(1.55rem,3.6vw,2.9rem)] leading-[1.12] font-extrabold tracking-[-0.02em]"
      >
        {title}
      </h2>
      {intro && <p className={`text-[15px] sm:text-base ${dark ? 'text-night-text' : 'text-muted'}`}>{intro}</p>}
    </div>
  )
}
