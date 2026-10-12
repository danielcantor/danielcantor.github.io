import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { navLinks } from '../data/navegacion.js'
import MobileMenu from './MobileMenu.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { MenuIcon } from './icons.jsx'
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
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-19 max-w-6xl items-center justify-between gap-3 px-5 sm:gap-6 sm:px-6">
        <Link to="/" aria-label="Daniel Cantor, ir al inicio" className="inline-flex min-w-0 shrink items-center">
          <img src={logo} alt="" width="654" height="74" className="h-auto w-[208px] max-w-full sm:h-7 sm:w-auto dark:hidden" />
          <img src={logoNegativo} alt="" width="654" height="74" className="hidden h-auto w-[208px] max-w-full sm:h-7 sm:w-auto dark:block" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-5 text-[15px] font-medium whitespace-nowrap xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink no-underline hover:text-brand-text">
                  {link.short ?? link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <div className="hidden lg:block">
            <WhatsAppButton ubicacion="header" size="sm">WhatsApp</WhatsAppButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="inline-flex size-11 items-center justify-center rounded-[10px] border border-line-strong bg-card text-ink lg:hidden"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
