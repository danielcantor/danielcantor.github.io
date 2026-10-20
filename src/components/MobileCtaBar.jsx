import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { contactoHref } from '../data/navegacion.js'
import { site } from '../config/site.js'
import { useLang } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import { MailIcon } from './icons.jsx'

// Barra fija con las dos acciones principales, solo en mobile.
// Se esconde mientras se ve algún elemento marcado con data-oculta-barra-cta
// (los botones del hero, la sección de contacto y el CTA de cada caso), donde ya están esas mismas acciones.
// En inglés, el contacto directo es por email en lugar de WhatsApp.
export default function MobileCtaBar() {
  const { pathname } = useLocation()
  const [hidden, setHidden] = useState(false)
  const lang = useLang()
  const t = ui[lang]

  useEffect(() => {
    const targets = document.querySelectorAll('[data-oculta-barra-cta]')
    setHidden(false)
    if (!targets.length || !('IntersectionObserver' in window)) return
    const visibles = new Set()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visibles.add(entry.target)
        else visibles.delete(entry.target)
      }
      setHidden(visibles.size > 0)
    })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [pathname])

  return (
    <div
      inert={hidden ? '' : undefined}
      aria-hidden={hidden || undefined}
      className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2.5 border-t border-line bg-surface/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 lg:hidden ${hidden ? 'translate-y-full' : ''}`}
    >
      <a
        href={contactoHref(lang)}
        onClick={() => trackEvent('cta_click', { cta: 'cotizar', ubicacion: 'barra_mobile' })}
        className="btn btn-accent h-12 px-4"
      >
        {t.cta.barra}
      </a>
      {t.contacto.whatsapp ? (
        <WhatsAppButton ubicacion="barra_mobile" variante="contorno" className="h-12 px-4">
          WhatsApp
        </WhatsAppButton>
      ) : (
        <a
          href={`mailto:${site.email}`}
          onClick={() => trackEvent('click_email', { ubicacion: 'barra_mobile' })}
          className="btn btn-outline h-12 gap-2.5 px-4"
        >
          <MailIcon size={19} />
          Email
        </a>
      )}
    </div>
  )
}
