import { Link, useLocation } from 'react-router'
import { langFromPath, alternatePath } from '../i18n/paths.js'
import { ui } from '../i18n/ui.js'
import { trackEvent } from '../lib/analytics.js'

// Lleva a la misma página en el otro idioma. Muestra el idioma de destino ("EN" / "ES").
export default function LangSwitch({ className = '' }) {
  const { pathname } = useLocation()
  const { idioma } = ui[langFromPath(pathname)]

  return (
    <Link
      to={alternatePath(pathname, idioma.lang)}
      hrefLang={idioma.lang}
      lang={idioma.lang}
      aria-label={idioma.aria}
      title={idioma.aria}
      onClick={() => trackEvent('cambio_idioma', { idioma: idioma.lang })}
      className={`inline-flex size-11 items-center justify-center rounded-full border border-line text-[0.8125rem] font-semibold tracking-[0.02em] text-ink no-underline transition-colors hover:text-accent-text ${className}`}
    >
      {idioma.label}
    </Link>
  )
}
