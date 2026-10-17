import { sectionHref } from '../i18n/paths.js'
import { ui } from '../i18n/ui.js'

// Links del menú principal. Apuntan a "/#seccion" (o "/en/#seccion") para que funcionen
// también desde las páginas de proyecto. Contacto va aparte, como botón.
export const navLinks = (lang) => ui[lang].nav.links.map((link) => ({ ...link, href: sectionHref(lang, link.id) }))

export const contactoHref = (lang) => sectionHref(lang, 'contacto')
