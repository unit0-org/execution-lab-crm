import { iconButtonStyle } from './IconButton.styles'

export function IconButton({ tone = 'default', label, children, ...rest }) {
  const type = rest.type || 'button'

  return (
    <button {...rest} type={type} data-tone={tone} aria-label={label}
      style={iconButtonStyle(tone)}>
      {children}
    </button>
  )
}
