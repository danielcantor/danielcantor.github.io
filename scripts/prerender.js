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
// la metemos en el HTML. Además precargamos las dos fuentes que usa el primer pantallazo
// (la sans del texto y la serif cursiva del acento del titular),
// para que lleguen junto con el JS y el texto no "salte" al cambiar de fuente.
async function inlineCriticalAssets(html) {
  const assetsDir = path.join(distDir, 'assets')
  const files = await fs.readdir(assetsDir)

  html = await replaceAsync(html, /<link rel="stylesheet"[^>]*href="\/assets\/([^"]+\.css)"[^>]*>/g, async (_, file) => {
    const css = await fs.readFile(path.join(assetsDir, file), 'utf-8')
    return `<style>${css.replace(/<\/style/gi, '<\\/style')}</style>`
  })

  const fonts = [/^schibsted-grotesk-latin-wght-normal-.*\.woff2$/, /^instrument-serif-latin-400-italic-.*\.woff2$/]
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
  const { html, head, htmlAttributes } = render(route.path)
  const page = template
    .replace(/<html[^>]*>/, htmlAttributes ? `<html ${htmlAttributes}>` : '$&')
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)

  const outFile = path.join(distDir, route.file)
  await fs.mkdir(path.dirname(outFile), { recursive: true })
  await fs.writeFile(outFile, page)
  console.log(`  prerender  ${route.path}  →  dist/${route.file}`)
}

// sitemap.xml con las rutas indexables (los proyectos de ejemplo quedan afuera),
// cada una con sus versiones en otros idiomas (hreflang).
const { site } = await import(pathToFileURL(path.join(root, 'src', 'config', 'site.js')).href)
const lastmod = new Date().toISOString().slice(0, 10)
const urls = prerenderRoutes
  .filter((route) => route.sitemap)
  .map((route) => {
    const alternates = Object.entries(route.alternates ?? {})
      .map(([lang, p]) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${new URL(p, site.url)}"/>`)
      .join('')
    const xDefault = route.alternates
      ? `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(route.alternates.es, site.url)}"/>`
      : ''
    return `  <url>\n    <loc>${new URL(route.path, site.url)}</loc>${alternates}${xDefault}\n    <lastmod>${lastmod}</lastmod>\n    <priority>${route.priority}</priority>\n  </url>`
  })
await fs.writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`,
)
console.log(`  sitemap    ${urls.length} URL(s)  →  dist/sitemap.xml`)

await fs.rm(ssrDir, { recursive: true, force: true })
