import { site, absoluteUrl } from '../config/site.js'
import { homePath, sectionHref, servicioPath } from '../i18n/paths.js'
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
        url: absoluteUrl(servicioPath(s.slugs, lang)),
        areaServed: lang === 'en' ? 'US' : 'AR',
      },
    })),
  },
  sameAs,
})

// Preguntas frecuentes, con el mismo texto que se ve en la página (por defecto, las de la home).
export const faqPage = (lang = 'es', preguntas = faq[lang]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: ui[lang].htmlLang,
  mainEntity: preguntas.map((item) => ({
    '@type': 'Question',
    name: item.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
  })),
})

// Landing de un servicio: el servicio en sí (ofrecido por el negocio) y sus migas de pan.
export const servicioSchema = (servicio, lang = 'es') => {
  const t = ui[lang].servicio
  const url = absoluteUrl(servicioPath(servicio.slugs, lang))
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#servicio`,
      name: servicio.titulo,
      serviceType: servicio.titulo,
      description: servicio.seoDescription,
      url,
      inLanguage: ui[lang].htmlLang,
      provider: { '@id': `${site.url}/#negocio` },
      areaServed: lang === 'en' ? { '@type': 'Country', name: 'United States' } : { '@type': 'Country', name: 'Argentina' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t.incluye,
        itemListElement: servicio.incluye.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.titulo, description: item.descripcion },
        })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: t.inicio, item: absoluteUrl(homePath(lang)) },
        { '@type': 'ListItem', position: 2, name: t.servicios, item: absoluteUrl(sectionHref(lang, 'servicios')) },
        { '@type': 'ListItem', position: 3, name: servicio.titulo, item: url },
      ],
    },
  ]
}
