import { site } from '../config/site.js'
import { trackEvent } from '../lib/analytics.js'

// Las redes sin perfil cargado no se muestran.
const redes = [
  ['LinkedIn', site.social.linkedin],
  ['Instagram', site.social.instagram],
  ['GitHub', site.social.github],
].filter(([, url]) => url)

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="border-t border-night-line bg-night text-night-text">
      <div className="mx-auto flex max-w-page flex-wrap justify-between gap-x-8 gap-y-3 px-4 pt-7 pb-28 text-sm sm:px-6 lg:px-10 lg:pb-7">
        <span>
          © {anio} {site.name}
        </span>
        <span>{site.city}, Argentina</span>
        <a
          href={`mailto:${site.email}`}
          onClick={() => trackEvent('click_email', { ubicacion: 'footer' })}
          className="no-underline underline-offset-4 hover:text-on-night hover:underline"
        >
          {site.email}
        </a>
        {redes.length > 0 && (
          <ul className="flex gap-5">
            {redes.map(([nombre, url]) => (
              <li key={nombre}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="no-underline underline-offset-4 hover:text-on-night hover:underline">
                  {nombre}
                  <span className="sr-only"> (se abre en una pestaña nueva)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  )
}
