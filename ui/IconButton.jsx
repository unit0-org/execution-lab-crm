import { iconButtonStyle } from './IconButton.styles'

// Tiny chrome-less button — for "x" / "+" affordances inside chips, rows, etc.
export function IconButton({ type = 'button', label, children, ...rest }) {
  return (
    <button {...rest} type={type} aria-label={label} style={iconButtonStyle}>
      {children}
    </button>
  )
}
