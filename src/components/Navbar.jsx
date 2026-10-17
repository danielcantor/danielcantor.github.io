import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { navLinks, contactoHref } from '../data/navegacion.js'
import { trackEvent } from '../lib/analytics.js'
import MobileMenu from './MobileMenu.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import logo from '../assets/img/isologo.svg'
import logoNegativo from '../assets/img/isologo-negativo.svg'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Si la ventana se agranda hasta el layout de escritorio, el menú mobile se cierra.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = (event) => event.matches && setMenuOpen(false)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-surface/92 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link to="/" aria-label="Daniel Cantor, ir al inicio" className="inline-flex min-w-0 shrink items-center">
          <img src={logo} alt="" width="654" height="74" className="h-[18px] w-auto sm:h-[22px] dark:hidden" />
          <img src={logoNegativo} alt="" width="654" height="74" className="hidden h-[18px] w-auto sm:h-[22px] dark:block" />
        </Link>

        <p className="hidden text-sm text-muted xl:block">Estudio de diseño y desarrollo web — Buenos Aires</p>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm font-medium whitespace-nowrap">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="no-underline underline-offset-4 hover:underline">
                    {link.short ?? link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle className="lg:ml-3" />
          <a
            href={contactoHref}
            onClick={() => trackEvent('cta_click', { cta: 'hablemos', ubicacion: 'header' })}
            className="btn btn-outline hidden h-11 px-[18px] text-sm lg:inline-flex"
          >
            Hablemos <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="btn btn-outline h-11 px-4 text-sm lg:hidden"
          >
            Menú
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
