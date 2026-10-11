// Paso de una línea de tiempo: vertical en mobile, horizontal desde lg
// (salvo con `horizontal={false}`, que la deja siempre vertical).
// La línea que lo une con el paso siguiente se dibuja al entrar en pantalla
// (.tl-line en index.css). `tono` define si va sobre fondo oscuro o claro.
export default function ProcesoPaso({ numero, titulo, descripcion, ultimo = false, tono = 'oscuro', horizontal = true }) {
  const oscuro = tono === 'oscuro'
  const linea = oscuro ? 'bg-accent/45' : 'bg-accent/60'
  const lg = (clases) => (horizontal ? clases : '')

  return (
    <div className={`relative grid grid-cols-[2.75rem_1fr] gap-x-4 pb-8 ${lg('lg:flex lg:flex-col lg:gap-4 lg:pr-6 lg:pb-0')}`}>
      {!ultimo && (
        <>
          <span aria-hidden="true" className={`tl-line tl-line-y absolute top-12 bottom-1 left-[1.3125rem] w-0.5 ${lg('lg:hidden')} ${linea}`} />
          {horizontal && (
            <span aria-hidden="true" className={`tl-line tl-line-x absolute top-[1.3125rem] right-1 left-14 hidden h-0.5 lg:block ${linea}`} />
          )}
        </>
      )}
      <span
        aria-hidden="true"
        className="relative z-10 inline-flex size-11 items-center justify-center rounded-full bg-accent font-display font-extrabold text-on-accent"
      >
        {numero}
      </span>
      <div className={`flex flex-col gap-1 pt-2 ${lg('lg:pt-0')}`}>
        <h3 className="font-display text-lg font-bold sm:text-xl">
          <span className="sr-only">Paso {numero}: </span>
          {titulo}
        </h3>
        <p className={`text-[15px] ${oscuro ? 'text-night-text' : 'text-muted'}`}>{descripcion}</p>
      </div>
    </div>
  )
}
