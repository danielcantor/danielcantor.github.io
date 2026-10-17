import { site, absoluteUrl } from '../config/site.js'
import { servicios } from './servicios.js'
import { faq } from './faq.js'

const sameAs = Object.values(site.social).filter(Boolean)

// Datos estructurados (JSON-LD). Cada entidad lleva un @id para que las páginas
// puedan referenciarse entre sí: el sitio, la persona y el negocio.

export const sitio = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#sitio`,
  name: site.name,
  url: `${site.url}/`,
  inLanguage: 'es-AR',
  publisher: { '@id': `${site.url}/#negocio` },
}

export const persona = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${site.url}/#persona`,
  name: site.name,
  url: `${site.url}/`,
  jobTitle: 'Desarrollador web y consultor SEO',
  email: site.email,
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: 'AR' },
  sameAs,
}

export const professionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#negocio`,
  name: site.name,
  description: site.defaultDescription,
  url: `${site.url}/`,
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
  ],
  founder: { '@id': persona['@id'] },
  knowsAbout: ['Diseño web', 'Desarrollo web', 'E-commerce', 'WooCommerce', 'Tiendanube', 'Shopify', 'SEO', 'Posicionamiento web'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios',
    itemListElement: servicios.map((s) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: s.titulo,
        description: s.descripcion,
        url: `${site.url}/#servicios`,
        areaServed: 'AR',
      },
    })),
  },
  sameAs,
}

// Preguntas frecuentes de la home, con el mismo texto que se ve en la página.
export const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
  })),
}
