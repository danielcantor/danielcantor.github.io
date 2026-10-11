import useDialog from '../hooks/useDialog.js'
import { navLinks } from '../data/navegacion.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import { CloseIcon } from './icons.jsx'
import logoClaro from '../assets/img/logo-claro.png'

export default function MobileMenu({ open, onClose }) {
  const panelRef = useDialog(open, onClose)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
      <div className="absolute inset-0 bg-ink/60 motion-safe:animate-[fade-in_200ms_ease-out]" onClick={onClose} />
      <div
        ref={panelRef}
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        className="relative flex h-full w-[86%] max-w-[340px] flex-col overflow-y-auto bg-brand px-6 pt-4 pb-7 text-surface motion-safe:animate-[slide-in_280ms_ease-out]"
      >
        <div className="mb-4 flex h-13 items-center justify-between">
          <img src={logoClaro} alt="Daniel Cantor" width="160" height="32" className="-ml-3 h-8 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú"
            className="inline-flex size-11 items-center justify-center rounded-[10px] border border-surface/35 text-surface"
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Principal">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-surface/20 last:border-b-0">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block py-3.5 text-[19px] font-semibold text-surface no-underline hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <WhatsAppButton onClick={onClose} className="mt-auto w-full" />
      </div>
    </div>
  )
}
