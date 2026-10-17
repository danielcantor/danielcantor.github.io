import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { langFromPath, alternatePath } from '../i18n/paths.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'

const CLAVE = 'aviso-idioma-cerrado'

// En las páginas en español, a quien tiene el navegador en inglés le ofrece la versión en inglés.
// No redirige: la persona elige. Se decide en el navegador, así el HTML prerenderizado es el mismo para todos.
export default function SugerenciaIdioma() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const t = ui.en.sugerencia
  const enEspanol = langFromPath(pathname) === 'es'

  useEffect(() => {
    if (!enEspanol) return setVisible(false)
    const prefiereIngles = /^en\b/i.test(navigator.languages?.[0] ?? navigator.language ?? '')
    let cerrado = false
    try {
      cerrado = localStorage.getItem(CLAVE) === '1'
    } catch {}
    setVisible(prefiereIngles && !cerrado)
  }, [enEspanol])

  function cerrar() {
    setVisible(false)
    try {
      localStorage.setItem(CLAVE, '1')
    } catch {}
  }

  if (!visible) return null

  return (
    <div lang="en" role="region" aria-label="Language" className="border-b border-line bg-panel">
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6 lg:px-10">
        <p>
          {t.texto}{' '}
          <Link
            to={alternatePath(pathname, 'en')}
            hrefLang="en"
            onClick={() => {
              trackEvent('cambio_idioma', { idioma: 'en', ubicacion: 'aviso' })
              cerrar()
            }}
            className="font-semibold whitespace-nowrap text-accent-text underline-offset-4 hover:underline"
          >
            {t.link} <span aria-hidden="true">→</span>
          </Link>
        </p>
        <button
          type="button"
          onClick={cerrar}
          aria-label={t.cerrar}
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted hover:text-ink"
        >
          <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
