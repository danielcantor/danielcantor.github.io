// Texto con partes en serif cursiva: las posiciones impares de `partes` van en serif.
// Ej.: ['Más consultas y ventas ', 'desde tu sitio'].
export default function Acento({ partes }) {
  return partes.map((parte, i) =>
    i % 2 ? (
      <span key={i} className="serif">
        {parte}
      </span>
    ) : (
      parte
    ),
  )
}
