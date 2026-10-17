import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { trackEvent } from '../lib/analytics.js'
import WhatsAppButton from './WhatsAppButton.jsx'

// Barra fija con las dos acciones principales, solo en mobile.
// Se esconde mientras se ve algún elemento marcado con data-oculta-barra-cta
// (los botones del hero y la sección de contacto), donde ya están esas mismas acciones.
export default function MobileCtaBar() {
  const { pathname } = useLocation()
  const [hidden, setHidden] = useState(false)

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
      className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-3 border-t border-line bg-surface/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur transition-transform duration-300 lg:hidden ${hidden ? 'translate-y-full' : ''}`}
    >
      <a
        href="/#contacto"
        onClick={() => trackEvent('cta_click', { cta: 'cotizar', ubicacion: 'barra_mobile' })}
        className="btn btn-primary btn-bar h-12 px-4"
      >
        Diagnóstico
      </a>
      <WhatsAppButton ubicacion="barra_mobile" size="sm" className="h-12">
        WhatsApp
      </WhatsAppButton>
    </div>
  )
}
