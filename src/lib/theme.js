// Tema claro/oscuro. Sin elección guardada, la página sigue al sistema operativo.
// El script inline de index.html aplica la elección guardada antes de pintar.
const KEY = 'tema'
const THEME_COLORS = { light: '#F5F7FB', dark: '#0B1431' }
const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

export function currentTheme() {
  return document.documentElement.dataset.theme ?? (darkQuery().matches ? 'dark' : 'light')
}

export function toggleTheme() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark'
  const html = document.documentElement
  const metas = document.querySelectorAll('meta[name="theme-color"]')

  // Si la elección coincide con el sistema, se olvida: así vuelve a seguirlo si cambia.
  if (next === (darkQuery().matches ? 'dark' : 'light')) {
    delete html.dataset.theme
    metas.forEach((meta) => (meta.content = meta.media.includes('dark') ? THEME_COLORS.dark : THEME_COLORS.light))
    try {
      localStorage.removeItem(KEY)
    } catch {}
  } else {
    html.dataset.theme = next
    metas.forEach((meta) => (meta.content = THEME_COLORS[next]))
    try {
      localStorage.setItem(KEY, next)
    } catch {}
  }
  return next
}
