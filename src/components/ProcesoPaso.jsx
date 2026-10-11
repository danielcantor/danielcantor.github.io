// Paso numerado reutilizable. `tono` define si va sobre fondo oscuro o claro.
export default function ProcesoPaso({ numero, titulo, descripcion, tono = 'oscuro' }) {
  const oscuro = tono === 'oscuro'
  return (
    <div
      className={`flex h-full flex-col gap-3 rounded-[20px] border p-7 ${
        oscuro ? 'border-night-line' : 'border-line bg-white'
      }`}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-11 items-center justify-center rounded-full bg-accent font-display font-extrabold text-ink"
      >
        {numero}
      </span>
      <h3 className="font-display text-[22px] font-bold">
        <span className="sr-only">Paso {numero}: </span>
        {titulo}
      </h3>
      <p className={`text-[15px] ${oscuro ? 'text-night-text' : 'text-muted'}`}>{descripcion}</p>
    </div>
  )
}
