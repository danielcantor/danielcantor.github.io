import { createPortal } from 'react-dom'
import useDialog from '../hooks/useDialog.js'
import { navLinks } from '../data/navegacion.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import { CloseIcon } from './icons.jsx'
import logoNegativo from '../assets/img/isologo-negativo.svg'

export default function MobileMenu({ open, onClose }) {
  const panelRef = useDialog(open, onClose)

  if (!open) return null

  // En modo oscuro el panel usa el azul de las tarjetas en lugar del azul de marca,
  // que resalta demasiado sobre el fondo oscuro.
  // Se renderiza en <body>: el header tiene backdrop-filter, que haría que un
  // `position: fixed` adentro suyo se ubique respecto del header y no de la pantalla.
  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
      <div className="absolute inset-0 bg-night/60 motion-safe:animate-[fade-in_200ms_ease-out]" onClick={onClose} />
      <div
        ref={panelRef}
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        className="relative flex h-full w-[86%] max-w-[340px] flex-col overflow-y-auto bg-brand px-6 pt-4 pb-7 dark:border-l dark:border-line dark:bg-card text-on-night motion-safe:animate-[slide-in_280ms_ease-out]"
      >
        <div className="mb-4 flex h-13 items-center justify-between">
          <img src={logoNegativo} alt="Daniel Cantor" width="654" height="74" className="h-5.5 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="inline-flex size-11 items-center justify-center rounded-[10px] border border-on-night/35 text-on-night"
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Principal">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-on-night/20 last:border-b-0">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 text-[1.1875rem] font-semibold text-on-night no-underline hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppButton ubicacion="menu_mobile" onClick={onClose} className="mt-auto w-full" />
      </div>
    </div>,
    document.body,
  )
}
