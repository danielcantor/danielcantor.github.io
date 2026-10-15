export default function ServicioCard({ servicio, numero }) {
  return (
    <article className="flex h-full flex-col gap-3.5 rounded-[20px] border border-line bg-surface p-5 sm:gap-4.5 sm:rounded-[22px] sm:p-8">
      <span className="font-display text-[0.9375rem] font-extrabold text-brand-text">
        {String(numero).padStart(2, '0')}
      </span>
      <h3 className="font-display text-xl leading-tight font-bold sm:text-[1.5625rem]">{servicio.titulo}</h3>
      <p className="text-[0.9375rem] text-muted sm:text-base">{servicio.descripcion}</p>
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold">Qué incluye</h4>
        <ul className="flex list-disc flex-col gap-0.5 pl-5 text-sm text-ink sm:gap-1 sm:text-[0.9375rem]">
          {servicio.incluye.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p className="mt-auto border-t border-line pt-4 text-sm text-muted">
        <strong className="text-ink">Para quién es:</strong> {servicio.paraQuien}
      </p>
    </article>
  )
}
