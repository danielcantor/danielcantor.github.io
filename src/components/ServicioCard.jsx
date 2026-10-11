export default function ServicioCard({ servicio, numero }) {
  return (
    <article className="flex h-full flex-col gap-4.5 rounded-[22px] border border-line bg-surface p-6 sm:p-8">
      <span className="font-display text-[15px] font-extrabold text-brand">
        {String(numero).padStart(2, '0')}
      </span>
      <h3 className="font-display text-[23px] leading-tight font-bold sm:text-[25px]">{servicio.titulo}</h3>
      <p className="text-base text-muted">{servicio.descripcion}</p>
      <div className="flex flex-col gap-2">
        <h4 className="text-sm font-semibold">Qué incluye</h4>
        <ul className="flex list-disc flex-col gap-1 pl-5 text-[15px] text-[#2c3550]">
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
