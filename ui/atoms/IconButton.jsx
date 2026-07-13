import { iconButtonStyle } from './IconButton.styles'

/**
 * Icon-only button; `label` is the aria-label; `size` sets the square px.
 */
export function IconButton(props) {
  const { tone = 'default', label, size, children, ...rest } = props
  const type = rest.type || 'button'

  return (
    <button {...rest} type={type} data-tone={tone} aria-label={label}
      style={iconButtonStyle(tone, size)}>
      {children}
    </button>
  )
}
