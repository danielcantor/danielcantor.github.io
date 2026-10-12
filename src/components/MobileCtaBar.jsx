import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { trackEvent } from '../lib/analytics.js'
import WhatsAppButton from './WhatsAppButton.jsx'

// Barra fija con las dos acciones principales, solo en mobile.
// Se esconde mientras la sección de contacto está en pantalla: ahí ya están el formulario y WhatsApp.
export default function MobileCtaBar() {
  const { pathname } = useLocation()
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const contacto = document.getElementById('contacto')
    setHidden(false)
    if (!contacto || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting))
    observer.observe(contacto)
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
        Cotizar
      </a>
      <WhatsAppButton ubicacion="barra_mobile" size="sm" className="h-12">
        WhatsApp
      </WhatsAppButton>
    </div>
  )
}
