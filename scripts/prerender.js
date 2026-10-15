// Genera un HTML estático por ruta a partir del build SSR, para que
// buscadores y redes sociales reciban el contenido y los metadatos completos.
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = await inlineCriticalAssets(await fs.readFile(path.join(distDir, 'index.html'), 'utf-8'))

// En mobile, la hoja de estilos externa bloquea el primer pintado (y el CSS es chico):
// la metemos en el HTML. Además precargamos las dos fuentes que usa el primer pantallazo,
// para que lleguen junto con el JS y el texto no "salte" al cambiar de fuente.
async function inlineCriticalAssets(html) {
  const assetsDir = path.join(distDir, 'assets')
  const files = await fs.readdir(assetsDir)

  html = await replaceAsync(html, /<link rel="stylesheet"[^>]*href="\/assets\/([^"]+\.css)"[^>]*>/g, async (_, file) => {
    const css = await fs.readFile(path.join(assetsDir, file), 'utf-8')
    return `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`
  })

  const fonts = [/^montserrat-latin-wght-normal-.*\.woff2$/, /^dancing-script-latin-700-normal-.*\.woff2$/]
  const preloads = fonts
    .map((pattern) => files.find((file) => pattern.test(file)))
    .filter(Boolean)
    .map((file) => `<link rel="preload" href="/assets/${file}" as="font" type="font/woff2" crossorigin>`)
  return html.replace('<!--app-head-->', `${preloads.join('\n    ')}\n    <!--app-head-->`)
}

async function replaceAsync(str, regex, fn) {
  const replacements = await Promise.all([...str.matchAll(regex)].map((match) => fn(...match)))
  let i = 0
  return str.replace(regex, () => replacements[i++])
}
const { render, prerenderRoutes } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

for (const route of prerenderRoutes) {
  const { html, head } = render(route.path)
  const page = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)

  const outFile = path.join(distDir, route.file)
  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await fs.writeFile(outFile, page)
  console.log(`  prerender  ${route.path}  →  dist/${route.file}`)
}

// sitemap.xml con las rutas indexables (los proyectos de ejemplo quedan afuera).
const { site } = await import(pathToFileURL(path.join(root, 'src', 'config', 'site.js')).href)
const lastmod = new Date().toISOString().slice(0, 10)
const urls = prerenderRoutes
  .filter((route) => route.sitemap)
  .map(
    (route) =>
      `  <url>\n    <loc>${new URL(route.path, site.url)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${route.priority}</priority>\n  </url>`,
  )
await fs.writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
)
console.log(`  sitemap    ${urls.length} URL(s)  →  dist/sitemap.xml`)

await fs.rm(ssrDir, { recursive: true, force: true })
