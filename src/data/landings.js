import { servicios } from './servicios.js'

// Contenido de la landing de cada servicio, por id de servicio (ver src/data/servicios.js).
// El nombre, la descripción y el "incluye" corto siguen viniendo de servicios.js.
// En los títulos con arrays, las posiciones impares van en serif cursiva.
//
// TODO: revisar plazos, alcance y respuestas según cómo trabajás cada servicio.

const landingsEs = {
  'sitios-web': {
    seoTitle: 'Diseño web para pymes en Buenos Aires',
    seoDescription:
      'Creación de sitios web a medida para pymes y profesionales de Buenos Aires: rápidos, fáciles de editar y pensados para traer consultas. Diagnóstico gratis y presupuesto cerrado.',
    eyebrow: 'Creación de sitios web',
    h1: ['Diseño web para pymes que necesitan ', 'más consultas'],
    bajada:
      'Sitios a medida, rápidos y fáciles de editar, pensados para que quien entra entienda qué hacés y te escriba. Sin plantillas genéricas y con presupuesto cerrado.',
    ficha: [
      ['Para quién', 'Pymes, profesionales y emprendimientos'],
      ['Plazo', '3 a 5 semanas'],
      ['Te llevás', 'Sitio publicado y capacitación'],
      ['Precio', 'Presupuesto cerrado'],
    ],
    sintomas: {
      titulo: ['¿Tu sitio actual ', 'te frena?'],
      items: [
        'Tenés visitas, pero casi nadie te escribe ni te llama.',
        'Se ve viejo o se rompe en el celular, que es desde donde entra la mayoría.',
        'Cada cambio depende de alguien que tarda semanas en responder.',
        'En Google aparece primero tu competencia, aunque vos hagas mejor el trabajo.',
      ],
    },
    incluye: [
      {
        titulo: 'Diseño a medida y responsive',
        descripcion: 'Una estructura pensada para tu negocio y tus clientes, que se ve bien en el celular, la tablet y la compu.',
      },
      {
        titulo: 'Hasta 6 secciones o páginas',
        descripcion: 'Inicio, servicios, nosotros, casos, contacto: lo que tu negocio necesite para explicar qué hacés y por qué elegirte.',
      },
      {
        titulo: 'Formulario de contacto y WhatsApp',
        descripcion: 'Cada consulta te llega al mail o al celular, y queda medida para saber de dónde vienen tus clientes.',
      },
      {
        titulo: 'SEO técnico de base',
        descripcion: 'Velocidad, metadatos, datos estructurados y alta en Google Search Console desde el primer día.',
      },
      {
        titulo: 'Capacitación para editarlo',
        descripcion: 'Te enseño a cambiar textos, imágenes y secciones sin depender de nadie, y te dejo todo documentado.',
      },
    ],
    pasos: [
      {
        titulo: 'Diagnóstico gratis',
        descripcion: 'Reviso tu sitio actual, si tenés, y charlamos sobre tus clientes y qué querés que hagan al entrar.',
      },
      {
        titulo: 'Estructura y propuesta',
        descripcion: 'Defino las secciones y te paso alcance, plazos y presupuesto cerrado, sin costos sorpresa.',
      },
      {
        titulo: 'Diseño y desarrollo',
        descripcion: 'Avances semanales en un link de prueba, para que veas y opines antes de publicar.',
      },
      {
        titulo: 'Publicación y capacitación',
        descripcion: 'Publicamos, conectamos Google Search Console y te enseño a editarlo.',
      },
    ],
    faq: [
      {
        pregunta: '¿Cuánto tarda en estar listo un sitio web?',
        respuesta:
          'Un sitio institucional suele estar listo en 3 a 5 semanas, según la cantidad de secciones y qué tan rápido tengamos los textos e imágenes.',
      },
      {
        pregunta: '¿Cuánto cuesta un sitio web para una pyme?',
        respuesta:
          'Depende del alcance. Primero hacemos el diagnóstico, que es gratis, y después te paso un presupuesto cerrado con todo lo que incluye. El precio que acordamos es el que pagás.',
      },
      {
        pregunta: 'Ya tengo un sitio. ¿Conviene rehacerlo?',
        respuesta:
          'No siempre. En el diagnóstico te digo si alcanza con mejorar lo que tenés o si conviene empezar de cero, y por qué.',
      },
      {
        pregunta: '¿Puedo editar el sitio yo mismo después?',
        respuesta:
          'Sí. Te dejo todo documentado y una capacitación para que puedas actualizar textos e imágenes sin depender de nadie.',
      },
    ],
    cta: '¿Arrancamos con tu sitio?',
  },

  ecommerce: {
    seoTitle: 'Asesoría e-commerce para tiendas online',
    seoDescription:
      'Asesoría e-commerce para pymes: auditoría de tu tienda, elección de plataforma (Tiendanube, Shopify o WooCommerce), fichas de producto, checkout y un plan priorizado para vender más.',
    eyebrow: 'Asesoría de e-commerce',
    h1: ['Tu tienda online tiene visitas. ', 'Hagamos que venda.'],
    bajada:
      'Reviso tu tienda de punta a punta —catálogo, fichas, medios de pago y checkout— y te dejo un plan priorizado para convertir más visitas en ventas.',
    ficha: [
      ['Para quién', 'Marcas que venden por redes o tiendas con pocas ventas'],
      ['Plataformas', 'Tiendanube · Shopify · WooCommerce'],
      ['Te llevás', 'Plan de acción priorizado'],
      ['Precio', 'Presupuesto cerrado'],
    ],
    sintomas: {
      titulo: ['¿Dónde se te ', 'caen las ventas?'],
      items: [
        'Te llegan visitas, pero la gente abandona el carrito antes de pagar.',
        'Vendés por Instagram o WhatsApp y respondés lo mismo cien veces por día.',
        'No sabés si tu plataforma te conviene o si estás pagando de más en comisiones.',
        'Las fichas de producto no responden lo que el cliente pregunta antes de comprar.',
      ],
    },
    incluye: [
      {
        titulo: 'Auditoría de la tienda actual',
        descripcion: 'Recorro la tienda como lo haría un cliente y reviso la analítica para encontrar dónde se pierden las ventas.',
      },
      {
        titulo: 'Elección de plataforma y medios de pago',
        descripcion: 'Comparamos Tiendanube, Shopify y WooCommerce según tu catálogo, tu volumen y tus costos, y definimos cómo cobrar.',
      },
      {
        titulo: 'Fichas de producto que venden',
        descripcion: 'Fotos, descripciones, precios, cuotas y envíos claros, para que el cliente no tenga que preguntar antes de comprar.',
      },
      {
        titulo: 'Checkout sin fricción',
        descripcion: 'Menos pasos, menos campos y los medios de pago a la vista, para que nadie abandone en el último paso.',
      },
      {
        titulo: 'Plan de acción priorizado',
        descripcion: 'Una lista ordenada por impacto y esfuerzo: qué hacer primero, qué puede esperar y qué no vale la pena.',
      },
    ],
    pasos: [
      {
        titulo: 'Diagnóstico gratis',
        descripcion: 'Charlamos sobre tu negocio y miro tu tienda o tus redes para ver por dónde empezar.',
      },
      {
        titulo: 'Auditoría',
        descripcion: 'Reviso catálogo, fichas, checkout, medios de pago y analítica, con datos y no con intuiciones.',
      },
      {
        titulo: 'Plan priorizado',
        descripcion: 'Te entrego el plan por escrito y lo repasamos juntos en una llamada.',
      },
      {
        titulo: 'Implementación',
        descripcion: 'Si querés, lo implementamos juntos o te acompaño mientras lo aplica tu equipo.',
      },
    ],
    faq: [
      {
        pregunta: '¿Qué plataforma conviene para mi tienda online?',
        respuesta:
          'Depende de tu catálogo, tu volumen de ventas y tu presupuesto. Comparamos opciones como Tiendanube, Shopify o WooCommerce y elegimos la que mejor se adapta a tu negocio.',
      },
      {
        pregunta: 'Todavía no tengo tienda, vendo por redes. ¿Me sirve?',
        respuesta:
          'Sí. Te ayudo a elegir la plataforma y a armar la tienda con el catálogo, los medios de pago y los envíos ordenados desde el principio.',
      },
      {
        pregunta: '¿Implementás los cambios o solo asesorás?',
        respuesta:
          'Las dos cosas. Podés llevarte el plan y aplicarlo con tu equipo, o podemos implementarlo juntos. Lo definimos en la propuesta.',
      },
      {
        pregunta: '¿Cuánto cuesta la asesoría?',
        respuesta:
          'Depende del tamaño de la tienda y de si incluye implementación. Después del diagnóstico gratis te paso un presupuesto cerrado.',
      },
    ],
    cta: '¿Vemos dónde se te escapan las ventas?',
  },

  seo: {
    seoTitle: 'Consultoría SEO y posicionamiento web para pymes',
    seoDescription:
      'Posicionamiento web para pymes de Buenos Aires: auditoría SEO, palabras clave, optimización on-page, SEO local y reportes mensuales para conseguir clientes desde Google.',
    eyebrow: 'Optimización SEO',
    h1: ['Que te encuentren en Google cuando ', 'buscan lo que hacés'],
    bajada:
      'Posicionamiento web para pymes: auditoría, palabras clave, optimización on-page y SEO local, con un reporte cada mes. Más clientes desde Google, sin depender solo de la publicidad paga.',
    ficha: [
      ['Para quién', 'Negocios con sitio propio'],
      ['Primeros resultados', '2 a 4 meses'],
      ['Seguimiento', 'Reporte mensual'],
      ['Precio', 'Presupuesto cerrado'],
    ],
    sintomas: {
      titulo: ['¿Google ', 'no te muestra?'],
      items: [
        'Buscás tu servicio en tu zona y aparecen otros, aunque vos lo hagas mejor.',
        'Todas tus consultas llegan por publicidad paga y, si la cortás, se cortan.',
        'Tenés un sitio lindo, pero casi nadie llega desde Google.',
        'No sabés qué busca tu cliente ni con qué palabras.',
      ],
    },
    incluye: [
      {
        titulo: 'Auditoría técnica y de contenidos',
        descripcion: 'Velocidad, indexación, errores, estructura y contenido: todo lo que hoy le impide a Google entender tu sitio.',
      },
      {
        titulo: 'Investigación de palabras clave',
        descripcion: 'Qué busca tu cliente, con qué palabras y cuánta competencia hay, para enfocar el trabajo donde hay negocio.',
      },
      {
        titulo: 'Optimización on-page',
        descripcion: 'Títulos, descripciones, encabezados, enlaces internos y datos estructurados en cada página importante.',
      },
      {
        titulo: 'SEO local',
        descripcion: 'Perfil de empresa en Google y señales locales para aparecer en Maps y en las búsquedas de tu zona.',
      },
      {
        titulo: 'Seguimiento y reportes mensuales',
        descripcion: 'Cada mes te paso un reporte de Search Console con posiciones, clics y próximos pasos, explicado en criollo.',
      },
    ],
    pasos: [
      {
        titulo: 'Diagnóstico gratis',
        descripcion: 'Reviso cómo te ve Google hoy y qué está haciendo tu competencia.',
      },
      {
        titulo: 'Auditoría y palabras clave',
        descripcion: 'Detecto los problemas técnicos y defino qué búsquedas conviene atacar primero.',
      },
      {
        titulo: 'Optimización',
        descripcion: 'Corrijo lo técnico y optimizo las páginas clave, empezando por lo que más impacto tiene.',
      },
      {
        titulo: 'Seguimiento mensual',
        descripcion: 'Medimos en Search Console, ajustamos y te paso un reporte cada mes.',
      },
    ],
    faq: [
      {
        pregunta: '¿Cuándo voy a ver resultados con el SEO?',
        respuesta:
          'El posicionamiento web es un trabajo de mediano plazo. Los primeros cambios suelen verse entre los 2 y 4 meses, y se consolidan con el tiempo. Cada mes te paso un reporte con la evolución.',
      },
      {
        pregunta: '¿Me garantizás el primer puesto en Google?',
        respuesta:
          'No, y desconfiá de quien te lo garantice: nadie controla a Google. Lo que sí te aseguro es un trabajo ordenado, medido y explicado mes a mes.',
      },
      {
        pregunta: 'Mi sitio lo hizo otra persona. ¿Igual podés trabajarlo?',
        respuesta:
          'Sí. Trabajo sobre WordPress, Shopify, Tiendanube y sitios a medida. Si algo de la plataforma limita el posicionamiento, te lo digo en el diagnóstico.',
      },
      {
        pregunta: '¿Conviene más el SEO o la publicidad paga?',
        respuesta:
          'Se complementan. La publicidad trae consultas desde el primer día, pero se corta cuando dejás de pagar; el SEO tarda más y sigue trayendo visitas con el tiempo.',
      },
    ],
    cta: '¿Vemos cómo te encuentra Google hoy?',
  },
}

// Para pymes de EE.UU.: precio en dólares, contacto por email y plataformas de allá.
const landingsEn = {
  'sitios-web': {
    seoTitle: 'Web design for small businesses',
    seoDescription:
      'Custom website design and development for US small businesses: fast, easy to edit and built to bring in leads. Free website audit and a fixed price in USD.',
    eyebrow: 'Website design & development',
    h1: ['Web design for small businesses that need ', 'more leads'],
    bajada:
      'Custom, fast websites that are easy to edit, built so visitors understand what you do and get in touch. No generic templates, and a fixed price in US dollars.',
    ficha: [
      ['Who it’s for', 'Small businesses, professionals and startups'],
      ['Timeline', '3 to 5 weeks'],
      ['You get', 'A live website and training'],
      ['Price', 'Fixed quote in USD'],
    ],
    sintomas: {
      titulo: ['Is your current website ', 'holding you back?'],
      items: [
        'You get visitors, but hardly anyone calls or fills out the form.',
        'It looks dated or breaks on mobile, where most of your visitors are.',
        'Every small change depends on someone who takes weeks to reply.',
        'Your competitors show up first on Google, even though you do better work.',
      ],
    },
    incluye: [
      {
        titulo: 'Custom responsive design',
        descripcion: 'A structure built around your business and your customers, that looks great on phones, tablets and desktops.',
      },
      {
        titulo: 'Up to 6 sections or pages',
        descripcion: 'Home, services, about, case studies, contact: whatever your business needs to explain what you do and why to choose you.',
      },
      {
        titulo: 'Contact form and clear calls to action',
        descripcion: 'Every inquiry lands in your inbox, and it’s tracked so you know where your customers come from.',
      },
      {
        titulo: 'Technical SEO setup',
        descripcion: 'Speed, metadata, structured data and Google Search Console set up from day one.',
      },
      {
        titulo: 'Training to edit it yourself',
        descripcion: 'I show you how to change copy, images and sections without depending on anyone, and hand over everything documented.',
      },
    ],
    pasos: [
      {
        titulo: 'Free audit',
        descripcion: 'I review your current site, if you have one, and we talk about your customers and what you want them to do.',
      },
      {
        titulo: 'Structure and proposal',
        descripcion: 'I map out the pages and send you scope, timeline and a fixed price in US dollars.',
      },
      {
        titulo: 'Design and build',
        descripcion: 'Weekly updates on a live preview link, so you can review and give feedback before launch.',
      },
      {
        titulo: 'Launch and training',
        descripcion: 'We go live, connect Google Search Console and I show you how to edit everything.',
      },
    ],
    faq: [
      {
        pregunta: 'How long does it take to build a website?',
        respuesta:
          'A business website usually takes 3 to 5 weeks, depending on the number of pages and how quickly we have the copy and images.',
      },
      {
        pregunta: 'How much does a website cost?',
        respuesta:
          'It depends on the scope. We start with the free audit, and then I send you a fixed quote in US dollars with everything included. The price we agree on is the price you pay.',
      },
      {
        pregunta: 'I already have a website. Should I rebuild it?',
        respuesta:
          'Not always. In the audit I’ll tell you whether improving what you have is enough or whether starting fresh makes more sense, and why.',
      },
      {
        pregunta: 'You are based in Argentina. How does working remotely work?',
        respuesta:
          'Everything happens online: we talk over email and video calls, and you follow the progress every week on a live preview link. Buenos Aires is only 1 to 2 hours ahead of New York.',
      },
    ],
    cta: 'Ready to start on your website?',
  },

  ecommerce: {
    seoTitle: 'E-commerce consulting for online stores',
    seoDescription:
      'E-commerce consulting for small businesses: a full store audit, platform choice (Shopify or WooCommerce), product pages, checkout and a prioritized plan to sell more.',
    eyebrow: 'E-commerce consulting',
    h1: ['Your online store gets traffic. ', 'Let’s make it sell.'],
    bajada:
      'I review your store end to end —catalog, product pages, payments and checkout— and hand you a prioritized plan to turn more visits into sales.',
    ficha: [
      ['Who it’s for', 'Brands selling on social or stores with few sales'],
      ['Platforms', 'Shopify · WooCommerce'],
      ['You get', 'A prioritized action plan'],
      ['Price', 'Fixed quote in USD'],
    ],
    sintomas: {
      titulo: ['Where are you ', 'losing sales?'],
      items: [
        'You get traffic, but shoppers abandon their cart before paying.',
        'You sell through Instagram or DMs and answer the same questions all day.',
        'You’re not sure your platform is right for you, or if you’re overpaying in fees.',
        'Your product pages don’t answer what customers ask before buying.',
      ],
    },
    incluye: [
      {
        titulo: 'Audit of your current store',
        descripcion: 'I go through your store the way a customer would and review your analytics to find where sales slip away.',
      },
      {
        titulo: 'Platform and payment setup',
        descripcion: 'We compare Shopify and WooCommerce based on your catalog, volume and costs, and decide how you’ll get paid.',
      },
      {
        titulo: 'Product pages that sell',
        descripcion: 'Clear photos, descriptions, pricing and shipping, so customers don’t need to ask before buying.',
      },
      {
        titulo: 'Frictionless checkout',
        descripcion: 'Fewer steps, fewer fields and payment options up front, so nobody drops off at the last step.',
      },
      {
        titulo: 'Prioritized action plan',
        descripcion: 'A list ranked by impact and effort: what to do first, what can wait and what isn’t worth it.',
      },
    ],
    pasos: [
      {
        titulo: 'Free audit',
        descripcion: 'We talk about your business and I look at your store or social channels to see where to start.',
      },
      {
        titulo: 'Store review',
        descripcion: 'I review catalog, product pages, checkout, payments and analytics, based on data rather than hunches.',
      },
      {
        titulo: 'Prioritized plan',
        descripcion: 'You get the plan in writing and we walk through it together on a call.',
      },
      {
        titulo: 'Implementation',
        descripcion: 'If you want, we implement it together, or I support your team while they roll it out.',
      },
    ],
    faq: [
      {
        pregunta: 'Which platform is best for my online store?',
        respuesta:
          'It depends on your catalog, your sales volume and your budget. We compare options like Shopify and WooCommerce and choose the one that fits your business best.',
      },
      {
        pregunta: 'I don’t have a store yet, I sell on social media. Is this for me?',
        respuesta:
          'Yes. I help you choose the platform and set up the store with your catalog, payments and shipping organized from the start.',
      },
      {
        pregunta: 'Do you implement the changes or only advise?',
        respuesta:
          'Both. You can take the plan and apply it with your team, or we can implement it together. We define that in the proposal.',
      },
      {
        pregunta: 'How much does the consulting cost?',
        respuesta:
          'It depends on the size of the store and whether it includes implementation. After the free audit I send you a fixed quote in US dollars.',
      },
    ],
    cta: 'Want to see where your sales are slipping away?',
  },

  seo: {
    seoTitle: 'SEO services for small businesses',
    seoDescription:
      'SEO for US small businesses: technical audit, keyword research, on-page optimization, local SEO and monthly reports, so more customers find you on Google.',
    eyebrow: 'SEO',
    h1: ['Get found on Google when people search for ', 'what you do'],
    bajada:
      'Search engine optimization for small businesses: audit, keyword research, on-page and local SEO, with a report every month. More customers from Google, without relying only on paid ads.',
    ficha: [
      ['Who it’s for', 'Businesses with their own website'],
      ['First results', '2 to 4 months'],
      ['Follow-up', 'Monthly report'],
      ['Price', 'Fixed quote in USD'],
    ],
    sintomas: {
      titulo: ['Is Google ', 'hiding you?'],
      items: [
        'You search for your service in your area and others show up, even though you do it better.',
        'All your leads come from paid ads, and when you pause them, they stop.',
        'Your website looks good, but almost nobody arrives from Google.',
        'You don’t know what your customers search for, or which words they use.',
      ],
    },
    incluye: [
      {
        titulo: 'Technical and content audit',
        descripcion: 'Speed, indexing, errors, structure and content: everything that keeps Google from understanding your site today.',
      },
      {
        titulo: 'Keyword research',
        descripcion: 'What your customers search for, which words they use and how much competition there is, so the work goes where the business is.',
      },
      {
        titulo: 'On-page optimization',
        descripcion: 'Titles, descriptions, headings, internal links and structured data on every page that matters.',
      },
      {
        titulo: 'Local SEO',
        descripcion: 'Google Business Profile and local signals to show up on Maps and in searches near you.',
      },
      {
        titulo: 'Tracking and monthly reports',
        descripcion: 'Every month you get a Search Console report with rankings, clicks and next steps, in plain English.',
      },
    ],
    pasos: [
      {
        titulo: 'Free audit',
        descripcion: 'I review how Google sees you today and what your competitors are doing.',
      },
      {
        titulo: 'Audit and keywords',
        descripcion: 'I find the technical issues and define which searches to go after first.',
      },
      {
        titulo: 'Optimization',
        descripcion: 'I fix the technical side and optimize your key pages, starting with what has the most impact.',
      },
      {
        titulo: 'Monthly follow-up',
        descripcion: 'We track results in Search Console, adjust and you get a report every month.',
      },
    ],
    faq: [
      {
        pregunta: 'When will I see results from SEO?',
        respuesta:
          'SEO is a medium-term investment. The first changes usually show up within 2 to 4 months and keep building over time. You get a report every month showing how things are going.',
      },
      {
        pregunta: 'Can you guarantee the #1 spot on Google?',
        respuesta:
          'No, and be wary of anyone who does: nobody controls Google. What I can promise is organized work that’s measured and explained every month.',
      },
      {
        pregunta: 'Someone else built my website. Can you still work on it?',
        respuesta:
          'Yes. I work with WordPress, Shopify and custom-built sites. If something about your platform limits your rankings, I’ll tell you in the audit.',
      },
      {
        pregunta: 'Is SEO better than paid ads?',
        respuesta:
          'They work together. Ads bring leads from day one but stop when you stop paying; SEO takes longer and keeps bringing in visitors over time.',
      },
    ],
    cta: 'Want to see how Google finds you today?',
  },
}

const landings = { es: landingsEs, en: landingsEn }

// Servicio completo (datos de servicios.js + contenido de su landing), buscado por el slug de la URL.
export function getServicio(slug, lang = 'es') {
  const servicio = servicios[lang].find((s) => s.slugs[lang] === slug)
  return servicio && { ...servicio, ...landings[lang][servicio.id] }
}
