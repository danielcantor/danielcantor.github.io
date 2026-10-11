import { site, whatsappUrl } from '../config/site.js'
import { navLinks } from '../data/navegacion.js'
import logo from '../assets/img/logo-apilado-claro.webp'

const redes = [
  ['LinkedIn', site.social.linkedin],
  ['Instagram', site.social.instagram],
  ['GitHub', site.social.github],
].filter(([, url]) => url)

export default function Footer() {
  const anio = new Date().getFullYear()
  const linkClass = 'text-night-text no-underline hover:text-white hover:underline'

  return (
    <footer className="bg-night text-night-text">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-16 pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <img src={logo} alt="Daniel Cantor" width="534" height="255" loading="lazy" className="h-16 w-auto self-start" />
            <p className="max-w-xs text-[15px]">
              Diseño web, asesoría e-commerce y consultoría SEO en {site.city}.
            </p>
          </div>

          <nav aria-label="Secciones" className="flex flex-col gap-2 text-[15px]">
            <h2 className="mb-1 font-semibold text-on-night">Secciones</h2>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-[15px]">
            <h2 className="mb-1 font-semibold text-on-night">Contacto</h2>
            <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
              {site.email}
            </a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={linkClass}>
              WhatsApp {site.phoneDisplay}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
            <span>{site.city}, Argentina</span>
          </div>

          {redes.length > 0 && (
            <div className="flex flex-col gap-2 text-[15px]">
              <h2 className="mb-1 font-semibold text-on-night">Redes</h2>
              {redes.map(([nombre, url]) => (
                <a key={nombre} href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {nombre}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-night-line pt-6 text-sm">
          <span>
            © {anio} {site.name}. Todos los derechos reservados.
          </span>
          <span>{site.url.replace('https://', '')}</span>
        </div>
      </div>
    </footer>
  )
}
