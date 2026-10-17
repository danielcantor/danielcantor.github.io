// Rutas por idioma. El español vive en la raíz y el inglés bajo /en/.
// Sin dependencias de React: lo usan también las rutas del prerender.
export const LANGS = ['es', 'en']

export function langFromPath(pathname = '/') {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

export const homePath = (lang = 'es') => (lang === 'en' ? '/en/' : '/')

export const sectionHref = (lang, id) => `${homePath(lang)}#${id}`

export const trabajoPath = (slug, lang = 'es') => (lang === 'en' ? `/en/work/${slug}/` : `/trabajos/${slug}/`)

// La misma página en el otro idioma (o la home, si no tiene equivalente).
export function alternatePath(pathname, lang) {
  const caso = pathname.match(/^\/(?:trabajos|en\/work)\/([^/]+)\/?$/)
  return caso ? trabajoPath(caso[1], lang) : homePath(lang)
}
