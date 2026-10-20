import { localize } from '../i18n/localize.js'

// Casos de trabajo. Cada uno genera su página en /trabajos/<slug>/ y en /en/work/<slug>/.
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
    servicios: ['Creación de sitios web', 'Asesoría de e-commerce'],
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
    servicios: ['Asesoría de e-commerce'],
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

// Textos en inglés de cada caso, por slug. Solo llevan lo que cambia:
// las imágenes, los números y los links se toman del caso en español.
const traducciones = {
  en: {
    'escuela-pato-valentin': {
      tipo: 'Sales landing page redesign',
      resultado: '7 landing pages redesigned',
      titular: 'Escuela Pato Valentín: clearer landing pages, designed for their audience',
      titularAcento: 'their audience',
      resumen:
        'A rebuild of the course and free-class landing pages for an online watercolor school, using Elementor’s new atomic editor and a reusable global style system.',
      rubro: 'Online education · Art',
      duracion: 'Ongoing',
      servicios: ['Website design & development', 'E-commerce consulting'],
      imagen: { alt: 'Redesigned landing page for the free class Mares que enamoran' },
      portada: {
        alt: 'Header of the Mares que enamoran landing page, with the title, two buttons and a watercolor seascape',
      },
      metricasTitulo: 'The project in numbers',
      metricas: [
        { label: 'landing pages rebuilt without touching the live originals' },
        { label: 'sections on Ritual de reconexión (down from 16)' },
        { label: 'reusable global classes, plus 18 brand variables' },
        { label: 'base font size, designed for readers over 50' },
      ],
      desafio: {
        titulo: 'Long, repetitive landing pages that were hard to maintain',
        parrafos: [
          'The course landing pages had grown piece by piece: up to 16 sections, testimonials scattered across four places, the course format explained twice, the bonuses far from the price and the FAQ split into two accordions.',
          'On top of that, every page had hand-written styles, with small text and low contrast for an audience mostly over 50. Changing a color or creating a new landing page meant redoing the design every time.',
        ],
      },
      pasos: [
        {
          titulo: 'Restructuring each landing page',
          descripcion:
            'We merged the repeated sections and reordered the buying journey: promise, who it’s for, results, curriculum, testimonials together before the price, offer with bonuses, and FAQ.',
        },
        {
          titulo: 'Global style system',
          descripcion:
            'Color and typography variables taken from the brand, plus reusable classes (buttons, sections, cards, accordions), so no page has hard-coded colors.',
        },
        {
          titulo: 'Accessibility for their audience',
          descripcion: '19 px base text, higher contrast, 64 px tall buttons and FAQ items that are easier to tap on a phone.',
        },
        {
          titulo: 'Built with Elementor V4',
          descripcion:
            'Seven new landing pages built alongside the originals, with FAQ structured data for Google and the Brevo forms and WooCommerce checkout in place.',
        },
        {
          titulo: 'Documentation and rollout',
          descripcion:
            'A guide to edit the landing pages and create new ones with the same styles, and a phased plan to move them to the live site with a way to roll back.',
        },
      ],
      antesDespues: {
        antes: {
          alt: 'Header of the Mares que enamoran landing page before the redesign',
          caption: 'the header had no button and the content ran on in one long block of small text.',
        },
        despues: {
          alt: 'Header of the Mares que enamoran landing page after the redesign',
          caption: 'a clear promise, two buttons, key details up front and the problem right next to the solution.',
        },
      },
      herramientas: ['WordPress', 'Elementor V4 (atomic editor)', 'Elementor Pro', 'WooCommerce', 'Brevo'],
      cta: 'Are your landing pages long and unclear about what to buy?',
    },
    'calculadora-cuotas-mercado-pago': {
      titulo: 'Mercado Pago installment calculator',
      tipo: 'Custom WooCommerce plugin',
      resultado: 'Installments visible from product page to checkout',
      titular: 'Mercado Pago installment calculator: monthly payments, clear before checkout',
      titularAcento: 'before checkout',
      resumen:
        'A WordPress plugin for Maxtecno that shows what each installment plan costs on the product page, lets shoppers pick one at checkout and sends the right total to Mercado Pago, Latin America’s leading payment platform.',
      rubro: 'Consumer tech · Online store',
      duracion: '2 weeks',
      servicios: ['E-commerce consulting'],
      imagen: {
        alt: 'Maxtecno product page with the best installment option and the panel listing every Mercado Pago plan',
      },
      portada: {
        alt: 'A PC product page on Maxtecno with the price, 3 interest-free installments and the panel with plans from 1 to 18 installments',
      },
      metricasTitulo: 'The plugin in numbers',
      metricas: [
        { label: 'places where installments show up: product page, shortcode, cart and checkout' },
        { label: 'click to pull current rates from the Mercado Pago API' },
        { label: 'classes split by responsibility, starting from a single script' },
        { label: 'manual math: the surcharge is added to the order total automatically' },
      ],
      desafio: {
        titulo: 'Interest charges customers only discovered at checkout',
        parrafos: [
          'Maxtecno sells tech products, and in Argentina many of those purchases are paid in monthly installments through Mercado Pago. But the store only showed the cash price: the installment amount and the surcharge appeared on Mercado Pago’s screen, when the customer was already about to pay.',
          'Rates change often and were entered by hand. All the logic lived in a single script that was hard to maintain, and the chosen plan wasn’t saved on the order.',
        ],
      },
      pasos: [
        {
          titulo: 'Installments on the product page',
          descripcion:
            'Below the price, the best option is highlighted (like 3 interest-free payments), and a button opens a panel with every plan, the amount per installment and the cash price. Also available as a shortcode for any page.',
        },
        {
          titulo: 'Installment picker at checkout',
          descripcion:
            'When the shopper chooses Mercado Pago, a picker shows each installment amount and the final total. Switching plans updates the order summary without reloading the page.',
        },
        {
          titulo: 'Correct surcharge and payment request',
          descripcion:
            'The surcharge for the chosen plan is added to the cart as a fee, and the payment request sent to Mercado Pago already includes the total and the number of installments.',
        },
        {
          titulo: 'Rates panel connected to the API',
          descripcion:
            'A WordPress admin panel to edit rates, pull the current ones from the Mercado Pago API with one click and simulate any amount.',
        },
        {
          titulo: 'Clean code and plan saved on each order',
          descripcion:
            'The original script became a modular plugin, split into admin, logic and view. The installment plan is saved on every order so it can be checked from the dashboard.',
        },
      ],
      herramientas: ['WordPress', 'WooCommerce', 'PHP', 'jQuery', 'Mercado Pago API'],
      cta: 'Does your store need a feature no plugin offers?',
    },
  },
}

// Los casos en el idioma pedido (en español, tal cual están arriba).
export function getTrabajos(lang = 'es') {
  return trabajos.map((t) => localize(t, traducciones[lang]?.[t.slug]))
}

export function getTrabajo(slug, lang = 'es') {
  return getTrabajos(lang).find((t) => t.slug === slug)
}
