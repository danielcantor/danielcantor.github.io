import { useEffect, useState } from 'react'
import { currentTheme, toggleTheme } from '../lib/theme.js'
import { useT } from '../i18n/index.js'
import { MoonIcon, SunIcon } from './icons.jsx'

export default function ThemeToggle({ className = '' }) {
  // El tema real solo se conoce en el navegador: hasta montar, la etiqueta es genérica
  // (el HTML prerenderizado no sabe qué tema tiene cada persona).
  const [theme, setTheme] = useState(null)
  const t = useT().tema

  useEffect(() => {
    setTheme(currentTheme())
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setTheme(currentTheme())
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const label = theme === 'dark' ? t.aClaro : theme === 'light' ? t.aOscuro : t.alternar

  // El ícono lo decide el CSS, así se ve bien desde el primer pintado: sol en oscuro, luna en claro.
  return (
    <button
      type="button"
      onClick={() => setTheme(toggleTheme())}
      aria-label={label}
      title={label}
      className={`inline-flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:text-accent-text ${className}`}
    >
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </button>
  )
}
