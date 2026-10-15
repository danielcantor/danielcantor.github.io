// Ítem de acordeón accesible: botón dentro del encabezado, con aria-expanded
// y aria-controls; el panel queda en el HTML (oculto con `hidden`) para los buscadores.
export default function AccordionItem({ id, pregunta, respuesta, abierto, onToggle }) {
  const botonId = `${id}-boton`
  const panelId = `${id}-panel`
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          id={botonId}
          aria-expanded={abierto}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex min-h-14 w-full items-center justify-between gap-4 py-3.5 text-left text-base font-semibold text-ink sm:min-h-16 sm:py-4.5 sm:text-lg"
        >
          {pregunta}
          <span
            aria-hidden="true"
            className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong text-lg transition-transform motion-reduce:transition-none ${abierto ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={botonId} hidden={!abierto} className="pr-10 pb-4.5 text-[0.9375rem] text-muted sm:pr-12 sm:pb-5.5 sm:text-base">
        {respuesta}
      </div>
    </div>
  )
}
