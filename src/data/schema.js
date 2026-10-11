import { site, absoluteUrl } from '../config/site.js'

// Datos estructurados del negocio (JSON-LD de tipo ProfessionalService).
export const professionalService = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#negocio`,
  name: site.name,
  description: site.defaultDescription,
  url: site.url,
  logo: absoluteUrl('/img/logo-cuadrado.png'),
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
  founder: { '@type': 'Person', name: site.name },
  knowsAbout: ['Diseño web', 'E-commerce', 'SEO', 'Posicionamiento web'],
  sameAs: Object.values(site.social).filter(Boolean),
}
