// Rutas por idioma. El español vive en la raíz y el inglés bajo /en/.
// Sin dependencias de React: lo usan también las rutas del prerender.
import { servicios } from '../data/servicios.js'

export const LANGS = ['es', 'en']

export function langFromPath(pathname = '/') {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

export const homePath = (lang = 'es') => (lang === 'en' ? '/en/' : '/')

export const sectionHref = (lang, id) => `${homePath(lang)}#${id}`

export const trabajoPath = (slug, lang = 'es') => (lang === 'en' ? `/en/work/${slug}/` : `/trabajos/${slug}/`)

// Landings de servicio. El slug cambia por idioma (es la palabra que se busca en Google),
// así que se guardan los dos: `slugs = { es: 'diseno-web', en: 'web-design' }`.
export const servicioPath = (slugs, lang = 'es') => (lang === 'en' ? `/en/services/${slugs.en}/` : `/servicios/${slugs.es}/`)

// La misma página en el otro idioma (o la home, si no tiene equivalente).
export function alternatePath(pathname, lang) {
  const caso = pathname.match(/^\/(?:trabajos|en\/work)\/([^/]+)\/?$/)
  if (caso) return trabajoPath(caso[1], lang)
  const servicio = pathname.match(/^\/(?:servicios|en\/services)\/([^/]+)\/?$/)
  const slugs = servicio && servicios.es.map((s) => s.slugs).find((s) => s.es === servicio[1] || s.en === servicio[1])
  return slugs ? servicioPath(slugs, lang) : homePath(lang)
}
