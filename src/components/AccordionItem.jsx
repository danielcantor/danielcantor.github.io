// Ítem de acordeón accesible: botón dentro del encabezado, con aria-expanded
// y aria-controls; el panel queda en el HTML (oculto con `hidden`) para los buscadores.
export default function AccordionItem({ id, pregunta, respuesta, abierto, onToggle }) {
  const botonId = `${id}-boton`
  const panelId = `${id}-panel`
  return (
    <div>
      <h3>
        <button
          type="button"
          id={botonId}
          aria-expanded={abierto}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-16 w-full items-center justify-between gap-4 py-4 text-left text-[1.0625rem] font-semibold tracking-[-0.01em] sm:min-h-19 sm:text-xl"
        >
          {pregunta}
          <span
            aria-hidden="true"
            className={`inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-line text-xl font-normal transition-transform motion-reduce:transition-none ${abierto ? 'rotate-45 border-accent bg-accent text-on-accent' : ''}`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M7 1v12M1 7h12" />
            </svg>
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={botonId} hidden={!abierto} className="max-w-3xl pr-12 pb-6 text-soft">
        {respuesta}
      </div>
    </div>
  )
}
