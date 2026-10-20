// Servicios que se muestran en la home y en el formulario de contacto.
// Cada uno tiene su landing en /servicios/<slugs.es>/ y /en/services/<slugs.en>/
// (el contenido largo de esas páginas está en src/data/landings.js).
const slugs = {
  'sitios-web': { es: 'diseno-web', en: 'web-design' },
  ecommerce: { es: 'asesoria-ecommerce', en: 'ecommerce-consulting' },
  seo: { es: 'seo', en: 'seo' },
}

const serviciosEs = [
  {
    id: 'sitios-web',
    titulo: 'Creación de sitios web',
    corto: 'Sitio web',
    descripcion:
      'Sitios rápidos, claros y pensados para convertir visitas en consultas. Diseño a medida, sin plantillas genéricas, listo para posicionar en Google.',
    incluye: [
      'Diseño responsive a medida',
      'Hasta 6 secciones o páginas', // TODO: ajustar al alcance real del servicio.
      'Formulario de contacto y botón de WhatsApp',
      'SEO técnico de base y Google Search Console',
      'Capacitación para editar los contenidos',
    ],
    paraQuien:
      'Pymes, profesionales y emprendimientos que necesitan su primer sitio o renovar uno que no les trae clientes.',
  },
  {
    id: 'ecommerce',
    titulo: 'Asesoría de e-commerce',
    corto: 'E-commerce',
    descripcion:
      'Te ayudo a elegir la plataforma, ordenar el catálogo y mejorar la conversión de tu tienda online para que las visitas se transformen en ventas.',
    incluye: [
      'Auditoría de la tienda actual',
      'Elección de plataforma y medios de pago',
      'Optimización de fichas de producto y checkout',
      'Plan de acción priorizado',
    ],
    paraQuien:
      'Marcas que venden por redes y quieren dar el salto, o tiendas que tienen tráfico pero pocas ventas.',
  },
  {
    id: 'seo',
    titulo: 'Optimización SEO',
    corto: 'SEO',
    descripcion:
      'Posicionamiento web para que te encuentren en Google cuando buscan lo que ofrecés, sin depender solo de la publicidad paga.',
    incluye: [
      'Auditoría técnica y de contenidos',
      'Investigación de palabras clave',
      'Optimización on-page y SEO local',
      'Seguimiento en Search Console y reportes mensuales',
    ],
    paraQuien:
      'Negocios con sitio propio que quieren más visitas orgánicas y clientes que lleguen desde Google.',
  },
]

// Para pymes de EE.UU.: sin WhatsApp ni plataformas locales en el texto.
const serviciosEn = [
  {
    id: 'sitios-web',
    titulo: 'Website design & development',
    corto: 'Website',
    descripcion:
      'Fast, clear websites built to turn visitors into leads. Custom design, no generic templates, ready to rank on Google.',
    incluye: [
      'Custom responsive design',
      'Up to 6 sections or pages', // TODO: ajustar al alcance real del servicio.
      'Contact form and clear calls to action',
      'Technical SEO setup and Google Search Console',
      'Training to edit your own content',
    ],
    paraQuien:
      'Small businesses, professionals and startups that need their first website, or a new one that actually brings in customers.',
  },
  {
    id: 'ecommerce',
    titulo: 'E-commerce consulting',
    corto: 'E-commerce',
    descripcion:
      'I help you choose the right platform, organize your catalog and improve your store’s conversion rate, so visits turn into sales.',
    incluye: [
      'Audit of your current store',
      'Platform and payment setup recommendations',
      'Product page and checkout optimization',
      'Prioritized action plan',
    ],
    paraQuien:
      'Brands selling on social media that are ready for their own store, or stores with traffic but too few sales.',
  },
  {
    id: 'seo',
    titulo: 'SEO',
    corto: 'SEO',
    descripcion:
      'Search engine optimization so people find you on Google when they search for what you offer, without relying only on paid ads.',
    incluye: [
      'Technical and content audit',
      'Keyword research',
      'On-page and local SEO',
      'Search Console tracking and monthly reports',
    ],
    paraQuien:
      'Businesses with their own website that want more organic traffic and more customers coming from Google.',
  },
]

const conSlugs = (lista) => lista.map((s) => ({ ...s, slugs: slugs[s.id] }))

export const servicios = { es: conSlugs(serviciosEs), en: conSlugs(serviciosEn) }
