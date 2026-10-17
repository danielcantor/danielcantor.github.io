// Combina un objeto base con su traducción: los objetos y las listas de objetos
// se combinan campo por campo; los textos y las listas de textos se reemplazan.
export function localize(base, over) {
  if (over === undefined) return base
  if (Array.isArray(over)) return Array.isArray(base) ? over.map((item, i) => localize(base[i], item)) : over
  if (isObject(over) && isObject(base)) {
    const out = { ...base }
    for (const key of Object.keys(over)) out[key] = localize(base[key], over[key])
    return out
  }
  return over
}

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)
