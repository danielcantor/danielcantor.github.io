import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { navLinks } from '../data/navegacion.js'
import MobileMenu from './MobileMenu.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import { MenuIcon } from './icons.jsx'
import logo from '../assets/img/logo-horizontal.webp'

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
      <div className="mx-auto flex h-19 max-w-6xl items-center justify-between gap-6 px-6">
        <Link to="/" aria-label="Daniel Cantor, ir al inicio" className="inline-flex shrink-0 items-center">
          <img src={logo} alt="" width="791" height="104" className="h-7 w-auto" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink no-underline hover:text-brand">
                  {link.short ?? link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className="inline-flex size-11 items-center justify-center rounded-[10px] border border-line-strong bg-white text-ink lg:hidden"
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}
