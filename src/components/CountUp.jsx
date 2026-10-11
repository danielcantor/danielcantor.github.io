import { useEffect, useState } from 'react'
import useInView, { prefersReducedMotion } from '../hooks/useInView.js'

function format(value, { decimals, suffix, sign }) {
  const prefix = sign && value > 0 ? '+' : value < 0 ? '−' : ''
  const number = Math.abs(value).toLocaleString('es-AR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return `${prefix}${number}${suffix}`
}

// Número que va de `from` a `to` cuando entra en pantalla.
// El HTML prerenderizado (y los lectores de pantalla) muestran siempre el valor final.
export default function CountUp({
  to,
  from = 0,
  decimals = 0,
  suffix = '',
  sign = false,
  duration = 1600,
  delay = 0,
  className = '',
}) {
  const [ref, inView] = useInView({ threshold: 0.5, rootMargin: '0px' })
  const [value, setValue] = useState(to)
  const opts = { decimals, suffix, sign }

  // Hasta que entra en pantalla muestra el valor final; recién ahí arranca desde `from`.
  // Si la animación no llega a correr, el número nunca queda en cero.
  useEffect(() => {
    if (!inView || prefersReducedMotion()) return
    let frame
    let start
    const tick = (now) => {
      start ??= now
      const k = Math.min(1, (now - start) / duration)
      setValue(from + (to - from) * (1 - Math.pow(1 - k, 3)))
      if (k < 1) frame = requestAnimationFrame(tick)
    }
    const timer = setTimeout(() => {
      setValue(from)
      frame = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frame)
      setValue(to)
    }
  }, [inView, from, to, duration, delay])

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true" className="tabular-nums">
        {format(value, opts)}
      </span>
      <span className="sr-only">{format(to, opts)}</span>
    </span>
  )
}
