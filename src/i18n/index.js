import { useLocation } from 'react-router'
import { langFromPath } from './paths.js'
import { ui } from './ui.js'

export * from './paths.js'

// El idioma sale de la URL, así el prerender y el navegador siempre coinciden.
export function useLang() {
  return langFromPath(useLocation().pathname)
}

// Textos de la interfaz en el idioma de la página.
export function useT() {
  return ui[useLang()]
}
