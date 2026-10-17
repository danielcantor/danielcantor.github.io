const ROMANOS = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x']

// Paso numerado en romanos. `columna`: número, título y texto apilados (proceso de la home).
// `fila`: número, título y texto en una misma línea desde md (pasos de cada caso).
export default function ProcesoPaso({ numero, titulo, descripcion, variante = 'columna' }) {
  const fila = variante === 'fila'
  const romano = <span aria-hidden="true" className="serif text-[1.375rem] leading-none text-accent-text sm:text-2xl">{ROMANOS[numero - 1]}.</span>

  if (fila) {
    return (
      <div className="grid grid-cols-[2.25rem_1fr] gap-x-3 gap-y-1 py-4 sm:py-5.5 md:grid-cols-[3.5rem_minmax(0,4fr)_minmax(0,6fr)] md:gap-6">
        {romano}
        <h3 className="text-[1.0625rem] font-semibold tracking-[-0.015em] sm:text-[1.375rem]">
          <span className="sr-only">Paso {numero}: </span>
          {titulo}
        </h3>
        <p className="col-start-2 text-[0.9375rem] text-soft md:col-auto md:text-base">{descripcion}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2 border-t border-line pt-3.5">
      {romano}
      <h3 className="font-semibold">
        <span className="sr-only">Paso {numero}: </span>
        {titulo}
      </h3>
      <p className="text-[0.9375rem] text-soft">{descripcion}</p>
    </div>
  )
}
