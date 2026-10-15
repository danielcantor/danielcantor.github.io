import { site, whatsappUrl } from '../config/site.js'
import { navLinks } from '../data/navegacion.js'
import { trackEvent } from '../lib/analytics.js'
import logo from '../assets/img/isologo-negativo.svg'
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, WhatsAppIcon } from './icons.jsx'

// Solo íconos: los redes sin logo cargado no se muestran.
const redes = [
  ['LinkedIn', site.social.linkedin, LinkedInIcon],
  ['GitHub', site.social.github, GitHubIcon],
].filter(([, url]) => url)

export default function Footer() {
  const anio = new Date().getFullYear()
  const linkClass = 'text-night-text no-underline hover:text-white hover:underline'

  return (
    <footer className="bg-night text-night-text">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-6 pt-12 pb-28 sm:gap-10 sm:pt-16 lg:pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4 lg:col-span-1">
            <img src={logo} alt="Daniel Cantor" width="654" height="74" loading="lazy" className="h-8 w-auto self-start sm:h-9" />
            <p className="max-w-xs text-[0.9375rem]">
              Diseño web, asesoría e-commerce y consultoría SEO en {site.city}.
            </p>
          </div>

          <nav aria-label="Secciones" className="flex flex-col gap-2 text-[0.9375rem]">
            <h2 className="mb-1 font-semibold text-on-night">Secciones</h2>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-[0.9375rem] max-sm:order-last max-sm:col-span-2">
            <h2 className="mb-1 font-semibold text-on-night">Contacto</h2>
            <a
              href={`mailto:${site.email}`}
              onClick={() => trackEvent('click_email', { ubicacion: 'footer' })}
              className={`${linkClass} inline-flex items-start gap-2 break-all`}
            >
              <MailIcon size={18} className="mt-[3px] shrink-0" />
              {site.email}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { ubicacion: 'footer' })}
              className={`${linkClass} inline-flex items-center gap-2`}
            >
              <WhatsAppIcon size={18} className="shrink-0" />
              <span className="sr-only">WhatsApp </span>
              {site.phoneDisplay}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPinIcon size={18} className="shrink-0" />
              {site.city}, Argentina
            </span>
          </div>

          {redes.length > 0 && (
            <div className="flex flex-col gap-2 text-[0.9375rem]">
              <h2 className="mb-1 font-semibold text-on-night">Redes</h2>
              <div className="flex gap-4">
                {redes.map(([nombre, url, Icono]) => (
                  <a key={nombre} href={url} target="_blank" rel="noopener noreferrer" className="text-night-text hover:text-white">
                    <Icono size={24} />
                    <span className="sr-only">{nombre} (se abre en una pestaña nueva)</span>
                  </a>
                ))}
              </div>
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
