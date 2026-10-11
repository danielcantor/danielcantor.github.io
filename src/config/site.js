// Datos generales del sitio. Es el único lugar donde hay que tocar
// nombre, dominio, contacto y redes.
export const site = {
  name: 'Daniel Cantor',
  url: 'https://danielcantor.com.ar',
  locale: 'es_AR',
  city: 'Buenos Aires',
  // TODO: reemplazar por un email @danielcantor.com.ar cuando esté configurado.
  email: 'daniel.cantor2019@gmail.com',
  phoneDisplay: '+54 9 11 3511-0935',
  whatsapp: '5491135110935',
  whatsappMessage: 'Hola Daniel, vi tu web y quiero consultarte por',
  defaultDescription:
    'Diseño web en Buenos Aires: creación de sitios web para pymes, asesoría e-commerce y consultoría SEO para mejorar tu posicionamiento web.',
  defaultImage: '/img/og-image.jpg',
  social: {
    // TODO: completar con los perfiles reales.
    linkedin: '',
    instagram: '',
    github: 'https://github.com/danielcantor',
  },
}

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function absoluteUrl(path = '/') {
  return new URL(path, site.url).toString()
}
