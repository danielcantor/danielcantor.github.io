// Íconos de trazo, decorativos: siempre acompañan un texto o un aria-label.
function Icon({ children, size = 20, strokeWidth = 2, className }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  )
}

export const WhatsAppIcon = (props) => (
  <Icon {...props}>
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" />
  </Icon>
)

export const MenuIcon = (props) => (
  <Icon {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
)

export const CloseIcon = (props) => (
  <Icon strokeWidth={2.2} {...props}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
)

export const ArrowUpRightIcon = (props) => (
  <Icon {...props}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Icon>
)
