// Casos de trabajo. Cada uno genera su página en /trabajos/<slug>/.
//
// TODO: salvo Escuela Pato Valentín, estos proyectos son de EJEMPLO. Reemplazalos por casos reales.
// Mientras un proyecto tenga `ejemplo: true`, su página muestra un aviso,
// lleva noindex y no se incluye en el sitemap.
//
// Imágenes: van en public/img/trabajos/ (WebP). Medidas recomendadas:
// tarjeta 800×600, portada 1600×700, antes/después 1200×900, galería 800×600.

export const trabajos = [
  {
    slug: 'escuela-pato-valentin',
    titulo: 'Escuela Pato Valentín',
    tipo: 'Rediseño de landings de venta',
    resultado: '7 landings rediseñadas',
    titular: 'Escuela Pato Valentín: landings más claras, pensadas para su público',
    resumen:
      'Reconstrucción de las landings de cursos y clases gratuitas de una escuela online de acuarela, con el editor atómico de Elementor y un sistema de estilos globales reutilizable.',
    cliente: 'Escuela Pato Valentín',
    rubro: 'Educación online · Arte',
    anio: '2026',
    duracion: 'En curso',
    servicios: ['Creación de sitios web', 'Asesoría e-commerce'],
    url: 'https://patovalentin.com.ar/',
    agencia: { nombre: 'Dizconnect', url: 'https://dizconnect.solutions/' }, // Proyecto hecho bajo contrato con la agencia.
    imagen: {
      src: '/img/trabajos/escuela-pato-valentin-card.webp',
      alt: 'Landing rediseñada de la clase gratuita Mares que enamoran',
      width: 800,
      height: 600,
    },
    portada: {
      src: '/img/trabajos/escuela-pato-valentin-portada.webp',
      alt: 'Encabezado de la landing Mares que enamoran, con el título, dos botones y una acuarela de mar',
      width: 1600,
      height: 700,
    },
    metricasTitulo: 'El proyecto en números',
    metricas: [
      { to: 7, label: 'landings reconstruidas sin tocar las originales' },
      { from: 16, to: 10, label: 'bloques en Ritual de reconexión (antes 16)' },
      { to: 25, label: 'clases globales reutilizables, más 18 variables de marca' },
      { to: 19, suffix: ' px', label: 'texto base, pensado para lectoras de más de 50 años' },
    ],
    desafio: {
      titulo: 'Landings largas, repetidas y difíciles de mantener',
      parrafos: [
        'Las landings de los cursos habían crecido por agregado: hasta 16 bloques, con testimonios repartidos en cuatro lugares, el formato del curso explicado dos veces, los regalos lejos del precio y dudas frecuentes partidas en dos acordeones.',
        'Además, cada página tenía sus estilos escritos a mano, con textos chicos y poco contraste para un público mayormente de más de 50 años. Cambiar un color o crear una landing nueva implicaba rehacer el diseño cada vez.',
      ],
    },
    pasos: [
      {
        titulo: 'Reestructura de cada landing',
        descripcion:
          'Unificamos los bloques repetidos y ordenamos el recorrido de compra: promesa, para quién es, resultados, programa, testimonios juntos antes del precio, oferta con regalos y dudas.',
      },
      {
        titulo: 'Sistema de estilos globales',
        descripcion:
          'Variables de color y tipografía tomadas de la marca y clases reutilizables (botones, secciones, tarjetas, acordeones), para que ninguna página tenga colores escritos a mano.',
      },
      {
        titulo: 'Accesibilidad para su público',
        descripcion:
          'Texto base de 19 px, más contraste, botones de 64 px de alto y preguntas más fáciles de tocar en el celular.',
      },
      {
        titulo: 'Construcción con Elementor V4',
        descripcion:
          'Siete landings nuevas armadas al lado de las originales, con preguntas frecuentes con datos estructurados para Google y los formularios de Brevo y el checkout de WooCommerce en su lugar.',
      },
      {
        titulo: 'Documentación y pasaje a producción',
        descripcion:
          'Una guía para editar las landings y crear nuevas con los mismos estilos, y un plan por fases para llevarlas al sitio productivo con vuelta atrás.',
      },
    ],
    antesDespues: {
      antes: {
        src: '/img/trabajos/escuela-pato-valentin-antes.webp',
        alt: 'Encabezado de la landing Mares que enamoran antes del rediseño',
        caption: 'el encabezado no tenía botón y el contenido seguía en un bloque largo de texto chico.',
      },
      despues: {
        src: '/img/trabajos/escuela-pato-valentin-despues.webp',
        alt: 'Encabezado de la landing Mares que enamoran después del rediseño',
        caption: 'promesa clara, dos botones, datos clave a la vista y el problema junto a la solución.',
      },
    },
    galeria: [],
    testimonio: null,
    herramientas: ['WordPress', 'Elementor V4 (editor atómico)', 'Elementor Pro', 'WooCommerce', 'Brevo'],
    cta: '¿Tus landings son largas y no queda claro qué comprar?',
  },
  {
    slug: 'calculadora-cuotas-mercado-pago',
    titulo: 'Calculadora de cuotas Mercado Pago',
    tipo: 'Plugin a medida para WooCommerce',
    resultado: 'Cuotas visibles de la ficha al pago',
    titular: 'Calculadora de cuotas Mercado Pago: el precio en cuotas, claro antes de pagar',
    resumen:
      'Un plugin de WordPress para Maxtecno que muestra cuánto sale cada plan de cuotas en la ficha de producto, deja elegirlo en el checkout y le pasa a Mercado Pago el total correcto.',
    cliente: 'Maxtecno',
    rubro: 'Tecnología · Tienda online',
    anio: '2025',
    duracion: '2 semanas',
    servicios: ['Asesoría e-commerce'],
    url: 'https://maxtecno.com.ar/',
    agencia: { nombre: 'Dizconnect', url: 'https://dizconnect.solutions/' }, // Proyecto hecho bajo contrato con la agencia.
    imagen: {
      src: '/img/trabajos/calculadora-cuotas-mercado-pago-card.webp',
      alt: 'Ficha de producto de Maxtecno con la mejor opción de cuotas y el panel con todos los planes de Mercado Pago',
      width: 800,
      height: 600,
    },
    portada: {
      src: '/img/trabajos/calculadora-cuotas-mercado-pago-portada.webp',
      alt: 'Ficha de una PC en Maxtecno con el precio, 3 cuotas sin interés y el panel Cuotas disponibles con los planes de 1 a 18 cuotas',
      width: 1600,
      height: 700,
    },
    metricasTitulo: 'El plugin en números',
    metricas: [
      { to: 4, label: 'lugares donde se ven las cuotas: ficha, shortcode, carrito y checkout' },
      { to: 1, label: 'clic para traer las tasas vigentes desde la API de Mercado Pago' },
      { to: 11, label: 'clases separadas por responsabilidad, a partir de un script único' },
      { to: 0, label: 'cuentas a mano: el recargo se suma solo al total del pedido' },
    ],
    desafio: {
      titulo: 'Cuotas con interés que el cliente descubría recién al pagar',
      parrafos: [
        'Maxtecno vende tecnología, un rubro donde muchas compras se pagan en cuotas con Mercado Pago. Pero la tienda solo mostraba el precio de contado: el valor de cada cuota y el recargo aparecían recién en la pantalla de Mercado Pago, cuando el cliente ya estaba por pagar.',
        'Las tasas cambian seguido y se cargaban a mano. Toda la lógica vivía en un único script difícil de mantener, y el plan elegido no quedaba registrado en el pedido.',
      ],
    },
    pasos: [
      {
        titulo: 'Cuotas a la vista en la ficha de producto',
        descripcion:
          'Debajo del precio se destaca la mejor opción, como 3 cuotas sin interés, y un botón abre un panel con todos los planes, el valor de cada cuota y el precio en efectivo. También como shortcode, para usarlo en cualquier página.',
      },
      {
        titulo: 'Selector de cuotas en el checkout',
        descripcion:
          'Al elegir Mercado Pago aparece un selector con el valor de cada cuota y el total final. Al cambiar de plan, el resumen del pedido se actualiza sin recargar la página.',
      },
      {
        titulo: 'Recargo y preferencia de pago correctos',
        descripcion:
          'El recargo del plan elegido se suma al carrito como un cargo más, y la preferencia que llega a Mercado Pago ya trae el total y la cantidad de cuotas.',
      },
      {
        titulo: 'Panel de tasas conectado a la API',
        descripcion:
          'Un panel en el escritorio de WordPress para editar las tasas, traer las vigentes desde la API de Mercado Pago con un botón y simular cualquier monto.',
      },
      {
        titulo: 'Código ordenado y plan guardado en el pedido',
        descripcion:
          'El script original pasó a un plugin modular, separado en administración, lógica y vista. El plan de cuotas queda guardado en cada pedido para consultarlo desde el panel.',
      },
    ],
    antesDespues: null,
    galeria: [],
    testimonio: null,
    herramientas: ['WordPress', 'WooCommerce', 'PHP', 'jQuery', 'API de Mercado Pago'],
    cta: '¿Tu tienda necesita una función que ningún plugin resuelve?',
  },
  {
    slug: 'almacen-natural',
    ejemplo: true,
    titulo: 'Almacén Natural',
    tipo: 'Optimización de tienda online',
    resultado: '+42% tasa de conversión',
    titular: 'Almacén Natural: de vender por Instagram a una tienda que convierte',
    resumen:
      'Cómo reorganizamos el catálogo, simplificamos el checkout y mejoramos la velocidad de una tienda de productos naturales de Buenos Aires.',
    cliente: 'Almacén Natural',
    rubro: 'Alimentos y dietética',
    anio: '2025',
    duracion: '6 semanas',
    servicios: ['Asesoría e-commerce', 'Optimización SEO'],
    url: '', // Link al sitio en vivo (opcional).
    imagen: {
      src: '/img/trabajos/almacen-natural-card.webp',
      alt: 'Página de inicio de la tienda online Almacén Natural',
      width: 800,
      height: 600,
    },
    portada: {
      src: '/img/trabajos/almacen-natural-portada.webp',
      alt: 'Tienda online de Almacén Natural en escritorio y celular',
      width: 1600,
      height: 700,
    },
    metricasTitulo: 'Resultados en los primeros 90 días',
    metricas: [
      { to: 42, sign: true, suffix: '%', label: 'tasa de conversión' },
      { to: -58, sign: true, suffix: '%', label: 'carritos abandonados' },
      { from: 5.4, to: 1.8, decimals: 1, suffix: ' s', label: 'tiempo de carga en mobile (antes 5,4 s)' },
      { to: 65, sign: true, suffix: '%', label: 'visitas orgánicas' },
    ],
    desafio: {
      titulo: 'Mucho tráfico desde redes, pocas compras',
      parrafos: [
        'Almacén Natural tenía una comunidad grande en Instagram, pero la tienda online no acompañaba: fichas de producto incompletas, un checkout de cinco pasos y fotos pesadas que hacían lenta la carga en el celular.',
        'La mayoría de los clientes terminaba escribiendo por mensaje directo para comprar, lo que les llevaba horas de atención por día.',
      ],
    },
    pasos: [
      {
        titulo: 'Auditoría de la tienda',
        descripcion: 'Analizamos el embudo de compra en Analytics y detectamos dónde se iban los usuarios.',
      },
      {
        titulo: 'Catálogo y fichas de producto',
        descripcion: 'Categorías nuevas, descripciones con beneficios y fotos optimizadas en WebP.',
      },
      {
        titulo: 'Checkout simplificado',
        descripcion: 'De cinco pasos a dos, con Mercado Pago y el costo de envío visible desde el carrito.',
      },
      {
        titulo: 'SEO para la tienda online',
        descripcion: 'Palabras clave por categoría, datos estructurados de producto y Search Console.',
      },
    ],
    antesDespues: {
      antes: {
        src: '/img/trabajos/almacen-natural-antes.webp',
        alt: 'Ficha de producto antes del rediseño',
        caption: 'fichas sin precio por kilo ni información nutricional.',
      },
      despues: {
        src: '/img/trabajos/almacen-natural-despues.webp',
        alt: 'Ficha de producto después del rediseño',
        caption: 'fichas claras, con beneficios y botón de compra visible.',
      },
    },
    galeria: [
      { src: '/img/trabajos/almacen-natural-galeria-1.webp', alt: 'Página de categoría de la tienda' },
      { src: '/img/trabajos/almacen-natural-galeria-2.webp', alt: 'Carrito de compras' },
      { src: '/img/trabajos/almacen-natural-galeria-3.webp', alt: 'Checkout en el celular' },
      { src: '/img/trabajos/almacen-natural-galeria-4.webp', alt: 'Confirmación de compra' },
    ],
    testimonio: null, // { texto: '…', nombre: '…', cargo: '…' }
    herramientas: ['Tiendanube', 'Mercado Pago', 'Google Analytics 4', 'Google Search Console', 'Figma'],
    cta: '¿Tu tienda online tiene visitas pero pocas ventas?',
  },
  {
    slug: 'estudio-contable-rivas',
    ejemplo: true,
    titulo: 'Estudio contable Rivas',
    tipo: 'Sitio web institucional',
    resultado: '3× consultas mensuales',
    titular: 'Estudio contable Rivas: un sitio que trae clientes nuevos todos los meses',
    resumen:
      'Rediseño completo del sitio institucional de un estudio contable, con foco en sus servicios, SEO local y contacto directo.',
    cliente: 'Estudio contable Rivas',
    rubro: 'Servicios profesionales',
    anio: '2025',
    duracion: '4 semanas',
    servicios: ['Creación de sitios web', 'Optimización SEO'],
    url: '',
    imagen: {
      src: '/img/trabajos/estudio-contable-rivas-card.webp',
      alt: 'Página de inicio del sitio del estudio contable Rivas',
      width: 800,
      height: 600,
    },
    portada: {
      src: '/img/trabajos/estudio-contable-rivas-portada.webp',
      alt: 'Sitio web del estudio contable Rivas',
      width: 1600,
      height: 700,
    },
    metricasTitulo: 'Resultados en los primeros 6 meses',
    metricas: [
      { to: 3, suffix: '×', label: 'consultas mensuales' },
      { to: 120, sign: true, suffix: '%', label: 'visitas orgánicas' },
      { from: 6.1, to: 1.6, decimals: 1, suffix: ' s', label: 'tiempo de carga (antes 6,1 s)' },
    ],
    desafio: {
      titulo: 'Un sitio viejo que no aparecía en Google',
      parrafos: [
        'El estudio tenía un sitio de hace diez años, lento, sin versión mobile y sin información clara sobre sus servicios. Casi todas las consultas llegaban por recomendación.',
      ],
    },
    pasos: [
      { titulo: 'Diagnóstico', descripcion: 'Relevamos servicios, clientes ideales y cómo buscaban un contador en la zona.' },
      { titulo: 'Sitio nuevo', descripcion: 'Una página por servicio, textos claros y formularios específicos.' },
      { titulo: 'SEO local', descripcion: 'Perfil de empresa en Google, datos estructurados y contenidos por barrio.' },
    ],
    antesDespues: null,
    galeria: [],
    testimonio: null,
    herramientas: ['React', 'Vite', 'Google Search Console', 'Google Business Profile'],
    cta: '¿Tu estudio necesita un sitio que traiga clientes?',
  },
  {
    slug: 'clinica-dental-sur',
    ejemplo: true,
    titulo: 'Clínica Dental Sur',
    tipo: 'SEO y posicionamiento web',
    resultado: 'Top 3 en búsquedas locales',
    titular: 'Clínica Dental Sur: primeros puestos en Google para su zona',
    resumen:
      'Estrategia de SEO local y contenidos para que una clínica odontológica aparezca cuando la buscan en su barrio.',
    cliente: 'Clínica Dental Sur',
    rubro: 'Salud',
    anio: '2024',
    duracion: '4 meses',
    servicios: ['Optimización SEO'],
    url: '',
    imagen: {
      src: '/img/trabajos/clinica-dental-sur-card.webp',
      alt: 'Sitio web de la Clínica Dental Sur',
      width: 800,
      height: 600,
    },
    portada: {
      src: '/img/trabajos/clinica-dental-sur-portada.webp',
      alt: 'Sitio web de la Clínica Dental Sur en escritorio',
      width: 1600,
      height: 700,
    },
    metricasTitulo: 'Resultados en 4 meses',
    metricas: [
      { to: 3, label: 'puesto en Google Maps para “dentista” en la zona' },
      { to: 85, sign: true, suffix: '%', label: 'llamadas desde Google' },
    ],
    desafio: {
      titulo: 'Invisibles en Google Maps',
      parrafos: [
        'La clínica tenía buenas reseñas de boca en boca, pero no aparecía en Google Maps ni en las búsquedas de la zona.',
      ],
    },
    pasos: [
      { titulo: 'Perfil de empresa', descripcion: 'Optimizamos el perfil de Google con fotos, horarios y categorías.' },
      { titulo: 'Páginas por tratamiento', descripcion: 'Contenido específico para cada tratamiento con preguntas frecuentes.' },
      { titulo: 'Reseñas', descripcion: 'Un circuito simple para pedir reseñas después de cada turno.' },
    ],
    antesDespues: null,
    galeria: [],
    testimonio: null,
    herramientas: ['Google Business Profile', 'Google Search Console', 'WordPress'],
    cta: '¿Querés que tus clientes te encuentren en Google?',
  },
  {
    slug: 'taller-madera-viva',
    ejemplo: true,
    titulo: 'Taller Madera Viva',
    tipo: 'Creación de tienda online',
    resultado: '120 ventas el primer mes',
    titular: 'Taller Madera Viva: del mensaje directo a la tienda online',
    resumen:
      'Tienda online desde cero para un taller de muebles, con catálogo ordenado, medios de pago locales y envíos.',
    cliente: 'Taller Madera Viva',
    rubro: 'Muebles y decoración',
    anio: '2024',
    duracion: '5 semanas',
    servicios: ['Asesoría e-commerce', 'Creación de sitios web'],
    url: '',
    imagen: {
      src: '/img/trabajos/taller-madera-viva-card.webp',
      alt: 'Tienda online del Taller Madera Viva',
      width: 800,
      height: 600,
    },
    portada: {
      src: '/img/trabajos/taller-madera-viva-portada.webp',
      alt: 'Catálogo de la tienda online del Taller Madera Viva',
      width: 1600,
      height: 700,
    },
    metricasTitulo: 'Resultados del primer mes',
    metricas: [
      { to: 120, label: 'ventas online' },
      { to: 70, sign: false, suffix: '%', label: 'menos consultas repetidas por mensaje' },
    ],
    desafio: {
      titulo: 'Vender sin catálogo',
      parrafos: [
        'El taller vendía solo por mensaje directo: cada venta implicaba mandar fotos, precios y calcular el envío a mano.',
      ],
    },
    pasos: [
      { titulo: 'Plataforma', descripcion: 'Elegimos la plataforma y los medios de pago según su volumen de ventas.' },
      { titulo: 'Catálogo', descripcion: 'Fotos, medidas y variantes ordenadas por ambiente.' },
      { titulo: 'Envíos', descripcion: 'Cálculo automático de envío y retiro por el taller.' },
    ],
    antesDespues: null,
    galeria: [],
    testimonio: null,
    herramientas: ['Tiendanube', 'Mercado Pago', 'Figma'],
    cta: '¿Vendés por redes y querés tu propia tienda?',
  },
]

export function getTrabajo(slug) {
  return trabajos.find((t) => t.slug === slug)
}

export const trabajoPath = (slug) => `/trabajos/${slug}/`
