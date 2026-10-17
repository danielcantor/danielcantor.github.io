import { site, absoluteUrl } from '../config/site.js'
import { homePath, sectionHref } from '../i18n/paths.js'
import { ui } from '../i18n/ui.js'
import { servicios } from './servicios.js'
import { faq } from './faq.js'

const sameAs = Object.values(site.social).filter(Boolean)

// Datos estructurados (JSON-LD). Cada entidad lleva un @id para que las páginas
// puedan referenciarse entre sí: el sitio, la persona y el negocio.
// Las entidades son las mismas en los dos idiomas; cambian los textos.

const textos = {
  es: { jobTitle: 'Desarrollador web y consultor SEO', catalogo: 'Servicios', knowsAbout: ['Diseño web', 'Desarrollo web', 'Posicionamiento web'] },
  en: { jobTitle: 'Web developer and SEO consultant', catalogo: 'Services', knowsAbout: ['Web design', 'Web development', 'Search engine optimization'] },
}

export const sitio = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#sitio`,
  name: site.name,
  url: `${site.url}/`,
  inLanguage: ['es-AR', 'en'],
  publisher: { '@id': `${site.url}/#negocio` },
}

export const persona = (lang = 'es') => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#persona`,
  name: site.name,
  url: absoluteUrl(homePath(lang)),
  jobTitle: textos[lang].jobTitle,
  email: site.email,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'AR' },
  sameAs,
})

export const professionalService = (lang = 'es') => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#negocio`,
  name: site.name,
  description: ui[lang].seo.description,
  url: absoluteUrl(homePath(lang)),
  logo: absoluteUrl('/favicon.png'),
  image: absoluteUrl(site.defaultImage),
  email: site.email,
  telephone: site.phoneDisplay,
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.city,
    addressCountry: 'AR',
  },
  areaServed: [
    { '@type': 'City', name: 'Buenos Aires' },
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Country', name: 'United States' },
  ],
  founder: { '@id': `${site.url}/#persona` },
  knowsAbout: [...textos[lang].knowsAbout, 'E-commerce', 'WooCommerce', 'Shopify', 'Tiendanube', 'SEO'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: textos[lang].catalogo,
    itemListElement: servicios[lang].map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.titulo,
        description: s.descripcion,
        url: absoluteUrl(sectionHref(lang, 'servicios')),
        areaServed: lang === 'en' ? 'US' : 'AR',
      },
    })),
  },
  sameAs,
})

// Preguntas frecuentes de la home, con el mismo texto que se ve en la página.
export const faqPage = (lang = 'es') => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: ui[lang].htmlLang,
  mainEntity: faq[lang].map((item) => ({
    '@type': 'Question',
    name: item.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
  })),
})
