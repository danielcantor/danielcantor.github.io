import { useRef, useState } from 'react'
import { servicios } from '../data/servicios.js'
import { site } from '../config/site.js'
import { useLang } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const VACIO = { nombre: '', email: '', servicio: '', mensaje: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Opciones del selector: los servicios con un nombre corto, más "Todavía no sé".
// El valor enviado sigue siendo el título completo del servicio, en el idioma de la página.
const opciones = (lang) => [
  ...servicios[lang].map((s) => ({ valor: s.titulo, etiqueta: s.corto ?? s.titulo })),
  { valor: ui[lang].form.noSe, etiqueta: ui[lang].form.noSe },
]

function validar(valores, mensajes) {
  const errores = {}
  if (valores.nombre.trim().length < 2) errores.nombre = mensajes.nombre
  if (!valores.email.trim()) errores.email = mensajes.email
  else if (!EMAIL_RE.test(valores.email.trim())) errores.email = mensajes.emailInvalido
  if (!valores.servicio) errores.servicio = mensajes.servicio
  if (valores.mensaje.trim().length < 10) errores.mensaje = mensajes.mensaje
  return errores
}

const campoBase =
  'w-full border-0 border-b bg-transparent px-0 text-lg text-on-night placeholder:text-night-field focus-visible:rounded-none focus-visible:outline-offset-4'

function MensajeError({ id, children }) {
  if (!children) return null
  return (
    <p id={id} className="text-sm font-medium text-night-danger">
      {children}
    </p>
  )
}

function Campo({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[0.8125rem] text-night-text">
        {label} <span aria-hidden="true">*</span>
      </label>
      {children}
      <MensajeError id={`${id}-error`}>{error}</MensajeError>
    </div>
  )
}

export default function ContactForm({ servicioInicial = '' }) {
  const inicial = { ...VACIO, servicio: servicioInicial }
  const [valores, setValores] = useState(inicial)
  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState('inicial') // inicial | enviando | enviado | error
  const formRef = useRef(null)
  const lang = useLang()
  const t = ui[lang].form

  function onChange(event) {
    const { name, value } = event.target
    const nuevos = { ...valores, [name]: value }
    setValores(nuevos)
    // Una vez marcado un error, se revalida mientras se escribe.
    if (errores[name]) setErrores((prev) => ({ ...prev, [name]: validar(nuevos, t.errores)[name] }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const encontrados = validar(valores, t.errores)
    setErrores(encontrados)
    const primero = Object.keys(VACIO).find((campo) => encontrados[campo])
    if (primero) {
      // Los radios del servicio llegan como RadioNodeList: se enfoca la primera opción.
      const campo = formRef.current.elements[primero]
      ;(campo instanceof RadioNodeList ? campo[0] : campo).focus()
      return
    }

    if (!ENDPOINT || !ACCESS_KEY) {
      console.error('Falta configurar VITE_FORM_ENDPOINT o VITE_WEB3FORMS_KEY en el archivo .env')
      setEstado('error')
      return
    }

    setEstado('enviando')
    try {
      const respuesta = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: t.asunto(site.url.replace('https://', ''), valores.servicio),
          from_name: 'Formulario web',
          name: valores.nombre.trim(),
          email: valores.email.trim(),
          servicio: valores.servicio,
          idioma: lang,
          message: valores.mensaje.trim(),
          botcheck: formRef.current.elements.botcheck.checked,
        }),
      })
      const data = await respuesta.json().catch(() => ({}))
      if (!respuesta.ok || data.success === false) throw new Error(data.message || respuesta.statusText)
      setEstado('enviado')
      trackEvent('generate_lead', { form: 'contacto', servicio: valores.servicio, idioma: lang })
      setValores(inicial)
    } catch (error) {
      console.error('No se pudo enviar el formulario:', error)
      setEstado('error')
      trackEvent('contact_form_error', { form: 'contacto' })
    }
  }

  const props = (name) => ({
    id: `contacto-${name}`,
    name,
    value: valores[name],
    onChange,
    'aria-invalid': errores[name] ? true : undefined,
    'aria-describedby': errores[name] ? `contacto-${name}-error` : undefined,
    'aria-required': true,
    className: `${campoBase} ${errores[name] ? 'border-night-danger' : 'border-night-field'}`,
  })

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-label={t.aria}
      // Clarity no graba lo que la persona escribe en el formulario.
      data-clarity-mask="true"
      className="flex flex-col gap-7"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <Campo id="contacto-nombre" label={t.nombre} error={errores.nombre}>
          <input type="text" autoComplete="name" placeholder={t.nombrePh} {...props('nombre')} className={`${props('nombre').className} h-12`} />
        </Campo>

        <Campo id="contacto-email" label={t.email} error={errores.email}>
          <input type="email" autoComplete="email" inputMode="email" placeholder={t.emailPh} {...props('email')} className={`${props('email').className} h-12`} />
        </Campo>
      </div>

      <fieldset aria-describedby={errores.servicio ? 'contacto-servicio-error' : undefined} className="flex flex-col gap-3">
        <legend className="mb-3 text-[0.8125rem] text-night-text">
          {t.servicio} <span aria-hidden="true">*</span>
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {opciones(lang).map((opcion) => (
            <label
              key={opcion.valor}
              className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-[0.9375rem] transition-colors has-checked:border-on-night has-checked:bg-on-night has-checked:font-semibold has-checked:text-night has-focus-visible:outline-3 has-focus-visible:outline-offset-3 has-focus-visible:outline-accent ${errores.servicio ? 'border-night-danger' : 'border-night-field'}`}
            >
              <input
                type="radio"
                name="servicio"
                value={opcion.valor}
                checked={valores.servicio === opcion.valor}
                onChange={onChange}
                aria-invalid={errores.servicio ? true : undefined}
                className="size-4 accent-night focus-visible:outline-none"
              />
              {opcion.etiqueta}
            </label>
          ))}
        </div>
        <MensajeError id="contacto-servicio-error">{errores.servicio}</MensajeError>
      </fieldset>

      <Campo id="contacto-mensaje" label={t.mensaje} error={errores.mensaje}>
        <textarea rows={3} placeholder={t.mensajePh} {...props('mensaje')} className={`${props('mensaje').className} resize-y py-2.5`} />
      </Campo>

      {/* Campo trampa para bots: las personas no lo ven ni lo completan. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.8125rem] text-night-text">{t.obligatorios}</p>
        <button
          type="submit"
          disabled={estado === 'enviando'}
          className="btn btn-accent h-14 w-full justify-between px-7 disabled:cursor-wait disabled:opacity-70 sm:w-auto sm:justify-center"
        >
          {estado === 'enviando' ? t.enviando : t.enviar} <span aria-hidden="true">→</span>
        </button>
      </div>

      <div role="status" aria-live="polite">
        {estado === 'enviado' && (
          <p className="rounded-xl bg-success-bg px-4 py-3 text-[0.9375rem] font-medium text-success-text">
            {t.enviado}
          </p>
        )}
        {estado === 'error' && (
          <p className="rounded-xl bg-error-bg px-4 py-3 text-[0.9375rem] font-medium text-error-text">
            {t.error(site.email)}
          </p>
        )}
      </div>
    </form>
  )
}
