import { trailingStyle } from './TextField.styles'

// Pins an action (e.g. a cancel icon) inside a TextField's box.
export function TrailingSlot({ children }) {
  if (!children) return null

  return <span style={trailingStyle}>{children}</span>
}
