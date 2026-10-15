// Convierte las imágenes de assets-src/ a WebP optimizado en public/img/,
// respetando las subcarpetas. Uso: npm run images
//
//   assets-src/perfil.jpg                   →  public/img/perfil.webp
//   assets-src/trabajos/mi-cliente-card.png →  public/img/trabajos/mi-cliente-card.webp
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const srcDir = path.join(root, 'assets-src')
const outDir = path.join(root, 'public', 'img')
const MAX_WIDTH = 1600
// Las tarjetas (*-card) se muestran chicas: además se generan versiones angostas para el srcset
// (ver TrabajoCard.jsx): mi-cliente-card-400.webp y mi-cliente-card-600.webp.
const CARD_WIDTHS = [400, 600]
const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff'])

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) yield full
  }
}

try {
  await fs.access(srcDir)
} catch {
  console.log('No existe la carpeta assets-src/. Creala y poné ahí las imágenes originales.')
  process.exit(0)
}

let count = 0
for await (const file of walk(srcDir)) {
  const relative = path.relative(srcDir, file).split(path.sep).join('/')
  const dest = path.join(outDir, relative.replace(/\.[^.]+$/, '.webp'))
  await fs.mkdir(path.dirname(dest), { recursive: true })
  const info = await sharp(file)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(dest)
  const kb = (info.size / 1024).toFixed(0)
  console.log(`  ${relative}  →  public/img/${relative.replace(/\.[^.]+$/, '.webp')}  (${info.width}×${info.height}, ${kb} KB)`)
  count++

  if (/-card$/.test(path.parse(file).name)) {
    for (const width of CARD_WIDTHS) {
      const variant = dest.replace(/\.webp$/, `-${width}.webp`)
      await sharp(file).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(variant)
      console.log(`    + ${path.basename(variant)}`)
    }
  }
}
console.log(`${count} imagen(es) optimizada(s). Usá el ancho y alto que figuran arriba en width/height.`)
