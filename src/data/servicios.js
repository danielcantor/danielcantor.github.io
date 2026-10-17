// Servicios que se muestran en la home y en el formulario de contacto.
export const servicios = [
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
