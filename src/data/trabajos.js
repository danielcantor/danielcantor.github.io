// Casos de trabajo. Cada uno genera su página en /trabajos/<slug>/.
//
// Si un proyecto lleva `ejemplo: true`, su página muestra un aviso,
// no se indexa y no entra al sitemap.
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
    titularAcento: 'su público', // Final del titular que va en serif cursiva.
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
    titularAcento: 'antes de pagar',
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
]

export function getTrabajo(slug) {
  return trabajos.find((t) => t.slug === slug)
}

export const trabajoPath = (slug) => `/trabajos/${slug}/`
