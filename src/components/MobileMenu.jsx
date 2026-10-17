import { createPortal } from 'react-dom'
import useDialog from '../hooks/useDialog.js'
import { navLinks, contactoHref } from '../data/navegacion.js'
import { trackEvent } from '../lib/analytics.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import { CloseIcon } from './icons.jsx'
import logoNegativo from '../assets/img/isologo-negativo.svg'

export default function MobileMenu({ open, onClose }) {
  const panelRef = useDialog(open, onClose)

  if (!open) return null

  // Se renderiza en <body>: el header tiene backdrop-filter, que haría que un
  // `position: fixed` adentro suyo se ubique respecto del header y no de la pantalla.
  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
      <div className="absolute inset-0 bg-[#0a1024]/60 motion-safe:animate-[fade-in_200ms_ease-out]" onClick={onClose} />
      <div
        ref={panelRef}
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        className="relative flex h-full w-[88%] max-w-[360px] flex-col overflow-y-auto bg-night px-5 pt-3.5 pb-7 text-on-night dark:border-l dark:border-night-line motion-safe:animate-[slide-in_280ms_ease-out]"
      >
        <div className="mb-6 flex h-11 items-center justify-between">
          <img src={logoNegativo} alt="Daniel Cantor" width="654" height="74" className="h-[18px] w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="inline-flex size-11 items-center justify-center rounded-full border border-night-line"
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Principal">
          <ol className="flex flex-col">
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-night-line">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="flex items-baseline gap-3 py-3.5 text-[1.625rem] font-semibold tracking-[-0.03em] no-underline"
                >
                  <span className="serif text-lg text-night-accent">{String(i + 1).padStart(2, '0')}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-auto flex flex-col gap-3 pt-8">
          <a
            href={contactoHref}
            onClick={() => {
              trackEvent('cta_click', { cta: 'diagnostico', ubicacion: 'menu_mobile' })
              onClose()
            }}
            className="btn btn-accent h-13 px-6"
          >
            Pedí tu diagnóstico gratis
          </a>
          <WhatsAppButton ubicacion="menu_mobile" onClick={onClose} className="w-full" />
        </div>
      </div>
    </div>,
    document.body,
  )
}
