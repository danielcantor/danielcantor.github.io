import useInView from '../hooks/useInView.js'

// Animación de entrada simple. Sin JavaScript o con "reducir movimiento"
// el contenido se ve directamente (ver [data-reveal] en index.css).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const [ref, inView] = useInView()
  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-visible={inView ? '' : undefined}
      style={delay ? { transitionDelay: `${delay}ms`, '--reveal-delay': `${delay}ms` } : undefined}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  )
}
