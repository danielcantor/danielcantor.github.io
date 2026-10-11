// Encabezado de sección: antetítulo, H2 y bajada opcional.
export default function SectionHeading({ id, eyebrow, title, intro, dark = false, className = '' }) {
  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${className}`}>
      <p className={`text-[15px] font-semibold ${dark ? 'text-[#f2a774]' : 'text-brand-text'}`}>{eyebrow}</p>
      <h2
        id={id}
        className="font-display text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.02em]"
      >
        {title}
      </h2>
      {intro && <p className={dark ? 'text-night-text' : 'text-muted'}>{intro}</p>}
    </div>
  )
}
