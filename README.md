# danielcantor.com.ar

Landing de servicios de Daniel Cantor: diseño web, asesoría e-commerce y SEO.
Vite + React, Tailwind CSS, prerenderizada a HTML estático y publicada en GitHub Pages.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo en http://localhost:5173
npm run build      # build + prerender de cada ruta + sitemap.xml en dist/
npm run preview    # sirve dist/ como lo haría GitHub Pages (incluye el 404)
npm run images     # convierte assets-src/ a WebP en public/img/
```

## Dónde editar el contenido

| Qué | Archivo |
| --- | --- |
| Nombre, dominio, email, WhatsApp, redes | `src/config/site.js` |
| Servicios | `src/data/servicios.js` |
| Trabajos y páginas de caso | `src/data/trabajos.js` |
| Pasos del proceso | `src/data/proceso.js` |
| Sobre mí y herramientas | `src/data/sobreMi.js` |
| Preguntas frecuentes | `src/data/faq.js` |
| Datos estructurados (JSON-LD) | `src/data/schema.js` |
| Imágenes | `public/img/` (WebP) |

Buscá `TODO` en el código para ver todo lo que falta completar.

## Cómo funciona el build

1. `vite build` genera el bundle del navegador.
2. `vite build --ssr` genera una versión para Node de la app.
3. `scripts/prerender.js` renderiza cada ruta de `src/routes.js` a HTML (con contenido,
   metadatos y JSON-LD), escribe `404.html` y arma `sitemap.xml`.

Cada proyecto de `src/data/trabajos.js` genera su página en `/trabajos/<slug>/`.
Mientras tenga `ejemplo: true`, muestra un aviso, lleva `noindex` y no entra al sitemap.

## Checklist para publicar

**GitHub y dominio**
- [x] Sitio nuevo en la rama `master` (cada push a `master` publica el sitio). El portfolio de 2016 quedó en la rama `legacy`.
- [ ] Settings → Pages → Source: **GitHub Actions**.
- [ ] Settings → Pages → Custom domain: `danielcantor.com.ar` y activar **Enforce HTTPS** cuando esté disponible.
- [ ] En NIC Argentina / tu proveedor de DNS: registros `A` del dominio raíz a `185.199.108.153`, `185.199.109.153`, `185.199.110.153` y `185.199.111.153`, y un `CNAME` de `www` a `danielcantor.github.io`. (Confirmá las IPs vigentes en la documentación de GitHub Pages.)

**Formulario (Web3Forms)**
- [ ] Crear la access key en https://web3forms.com con tu email.
- [ ] Copiar `.env.example` como `.env` y completar `VITE_WEB3FORMS_KEY` (para probar en local).
- [ ] En GitHub → Settings → Secrets and variables → Actions → **Variables**: crear `VITE_FORM_ENDPOINT` (`https://api.web3forms.com/submit`) y `VITE_WEB3FORMS_KEY`.
- [ ] Mandar un mensaje de prueba desde el sitio publicado.

**Contenido**
- [ ] Reemplazar los 4 trabajos de ejemplo por casos reales (y sacar `ejemplo: true`).
- [ ] Imágenes reales: `hero.webp`, `perfil.webp` y las de `public/img/trabajos/`.
- [ ] Resultado destacado del hero (`src/components/Hero.jsx`).
- [ ] Años de experiencia, texto y herramientas en `src/data/sobreMi.js`.
- [ ] Links de LinkedIn e Instagram en `src/config/site.js`.
- [ ] Revisar precios, tiempos y respuestas en `src/data/faq.js` y alcance en `src/data/servicios.js`.
- [ ] (Opcional) Email propio `@danielcantor.com.ar` y logo en SVG.

**Google**
- [ ] Google Search Console: agregar la propiedad de dominio `danielcantor.com.ar` (verificación por registro TXT en el DNS).
- [ ] Enviar `https://danielcantor.com.ar/sitemap.xml` en Search Console.
- [ ] Revisar los datos estructurados con la Prueba de resultados enriquecidos de Google.
- [ ] (Opcional) Perfil de empresa en Google para aparecer en Maps.
