import { useRef, useState } from 'react'
import { servicios } from '../data/servicios.js'
import { site } from '../config/site.js'
import { trackEvent } from '../lib/analytics.js'

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const VACIO = { nombre: '', email: '', servicio: '', mensaje: '' }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validar(valores) {
  const errores = {}
  if (valores.nombre.trim().length < 2) errores.nombre = 'Ingresá tu nombre.'
  if (!valores.email.trim()) errores.email = 'Ingresá tu email.'
  else if (!EMAIL_RE.test(valores.email.trim()))
    errores.email = 'Ingresá un email válido, por ejemplo nombre@dominio.com.'
  if (!valores.servicio) errores.servicio = 'Elegí el servicio que te interesa.'
  if (valores.mensaje.trim().length < 10) errores.mensaje = 'Contame un poco más (al menos 10 caracteres).'
  return errores
}

const campoBase =
  'w-full rounded-xl border-[1.5px] bg-field px-3.5 text-ink placeholder:text-subtle focus-visible:border-brand'

function Campo({ id, label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[15px] font-semibold">
        {label} <span aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactForm() {
  const [valores, setValores] = useState(VACIO)
  const [errores, setErrores] = useState({})
  const [estado, setEstado] = useState('inicial') // inicial | enviando | enviado | error
  const formRef = useRef(null)

  function onChange(event) {
    const { name, value } = event.target
    const nuevos = { ...valores, [name]: value }
    setValores(nuevos)
    // Una vez marcado un error, se revalida mientras se escribe.
    if (errores[name]) setErrores((prev) => ({ ...prev, [name]: validar(nuevos)[name] }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    const encontrados = validar(valores)
    setErrores(encontrados)
    const primero = Object.keys(VACIO).find((campo) => encontrados[campo])
    if (primero) {
      formRef.current.elements[primero].focus()
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
          subject: `Nueva consulta desde ${site.url.replace('https://', '')}: ${valores.servicio}`,
          from_name: 'Formulario web',
          name: valores.nombre.trim(),
          email: valores.email.trim(),
          servicio: valores.servicio,
          message: valores.mensaje.trim(),
          botcheck: formRef.current.elements.botcheck.checked,
        }),
      })
      const data = await respuesta.json().catch(() => ({}))
      if (!respuesta.ok || data.success === false) throw new Error(data.message || respuesta.statusText)
      setEstado('enviado')
      trackEvent('generate_lead', { form: 'contacto', servicio: valores.servicio })
      setValores(VACIO)
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
    className: `${campoBase} ${errores[name] ? 'border-danger' : 'border-line-strong'}`,
  })

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-label="Formulario de contacto"
      // Clarity no graba lo que la persona escribe en el formulario.
      data-clarity-mask="true"
      className="flex flex-col gap-4 rounded-3xl border border-line bg-card p-5 sm:gap-5 sm:p-8"
    >
      <Campo id="contacto-nombre" label="Nombre" error={errores.nombre}>
        <input type="text" autoComplete="name" placeholder="Tu nombre" {...props('nombre')} className={`${props('nombre').className} h-12.5`} />
      </Campo>

      <Campo id="contacto-email" label="Email" error={errores.email}>
        <input type="email" autoComplete="email" inputMode="email" placeholder="vos@empresa.com" {...props('email')} className={`${props('email').className} h-12.5`} />
      </Campo>

      <Campo id="contacto-servicio" label="Servicio de interés" error={errores.servicio}>
        <select {...props('servicio')} className={`${props('servicio').className} h-12.5`}>
          <option value="">Elegí una opción</option>
          {servicios.map((s) => (
            <option key={s.id} value={s.titulo}>
              {s.titulo}
            </option>
          ))}
          <option value="Todavía no sé">Todavía no sé</option>
        </select>
      </Campo>

      <Campo id="contacto-mensaje" label="Mensaje" error={errores.mensaje}>
        <textarea rows={4} placeholder="Contame qué necesitás" {...props('mensaje')} className={`${props('mensaje').className} resize-y py-3`} />
      </Campo>

      {/* Campo trampa para bots: las personas no lo ven ni lo completan. */}
      <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={estado === 'enviando'}
        className="btn btn-primary btn-bar h-13.5 disabled:cursor-wait disabled:opacity-70"
      >
        {estado === 'enviando' ? 'Enviando…' : 'Enviar consulta'}
      </button>

      <div role="status" aria-live="polite">
        {estado === 'enviado' && (
          <p className="rounded-xl bg-success-bg px-4 py-3 text-[15px] font-medium text-success-text">
            ¡Gracias! Recibí tu mensaje y te respondo en menos de 24 horas hábiles.
          </p>
        )}
        {estado === 'error' && (
          <p className="rounded-xl bg-error-bg px-4 py-3 text-[15px] font-medium text-error-text">
            No se pudo enviar el mensaje. Probá de nuevo en unos minutos o escribime por WhatsApp.
          </p>
        )}
      </div>
    </form>
  )
}
