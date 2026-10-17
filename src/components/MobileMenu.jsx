import { createPortal } from 'react-dom'
import useDialog from '../hooks/useDialog.js'
import { navLinks, contactoHref } from '../data/navegacion.js'
import { site } from '../config/site.js'
import { useLang } from '../i18n/index.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import logo from '../assets/img/isologo.svg'
import logoNegativo from '../assets/img/isologo-negativo.svg'

// Menú de pantalla completa: repite la barra del header (con "Cerrar" donde estaba "Menú")
// y muestra las secciones como un índice, con el diagnóstico y el contacto directo al pie.
export default function MobileMenu({ open, onClose }) {
  const panelRef = useDialog(open, onClose)
  const lang = useLang()
  const t = ui[lang]
  const links = navLinks(lang)

  if (!open) return null

  // Se renderiza en <body>: el header tiene backdrop-filter, que haría que un
  // `position: fixed` adentro suyo se ubique respecto del header y no de la pantalla.
  return createPortal(
    <div
      ref={panelRef}
      id="menu-mobile"
      role="dialog"
      aria-modal="true"
      aria-label={t.nav.menu}
      className="menu-mobile fixed inset-0 z-50 flex flex-col overflow-y-auto bg-surface text-ink lg:hidden"
    >
      <div className="flex h-18 shrink-0 items-center justify-between px-4 sm:px-6">
        <img src={logo} alt="Daniel Cantor" width="654" height="74" className="h-[18px] w-auto dark:hidden" />
        <img src={logoNegativo} alt="Daniel Cantor" width="654" height="74" className="hidden h-[18px] w-auto dark:block" />
        <button type="button" onClick={onClose} className="btn btn-outline h-11 px-4 text-sm">
          {t.nav.cerrar}
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-10 px-4 pt-6 pb-8 sm:px-6">
        <nav aria-label={t.nav.principal} className="flex flex-col gap-3">
          <p className="text-sm text-muted">
            <span className="font-semibold text-accent-text">{t.nav.indice}</span>
            {t.nav.secciones}
          </p>
          <ol className="filas">
            {links.map((link, i) => (
              <li key={link.href} style={{ '--i': i }} className="menu-item">
                <a
                  href={link.href}
                  onClick={onClose}
                  className="grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-2 py-3.5 no-underline"
                >
                  <span className="serif text-xl text-accent-text">{String(i + 1).padStart(2, '0')}</span>
                  <span className="menu-texto text-[clamp(1.875rem,9vw,2.5rem)] leading-none font-semibold tracking-[-0.04em]">
                    {link.label}
                  </span>
                  <span aria-hidden="true" className="text-xl text-muted">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div style={{ '--i': links.length }} className="menu-item mt-auto flex flex-col gap-5">
          <a
            href={contactoHref(lang)}
            onClick={() => {
              trackEvent('cta_click', { cta: 'diagnostico', ubicacion: 'menu_mobile' })
              onClose()
            }}
            className="btn btn-accent h-14 justify-between px-6"
          >
            {t.cta.diagnostico} <span aria-hidden="true">→</span>
          </a>
          <div className="flex flex-col items-start gap-1 border-t border-line pt-4">
            <p className="text-[0.8125rem] text-muted">{t.cta.directo}</p>
            <a
              href={`mailto:${site.email}`}
              onClick={() => trackEvent('click_email', { ubicacion: 'menu_mobile' })}
              className="serif text-[1.625rem] leading-tight break-all underline decoration-accent decoration-1 underline-offset-[6px]"
            >
              {site.email}
            </a>
            {t.contacto.whatsapp && (
              <WhatsAppButton ubicacion="menu_mobile" variante="link" onClick={onClose}>
                WhatsApp
              </WhatsAppButton>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
