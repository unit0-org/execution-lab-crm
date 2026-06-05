import { hoverRevealStyle } from './HoverReveal.styles'

// Shows its actions only while the surrounding [data-hover-host] is
// hovered or focused. Always visible on touch devices (no hover).
export function HoverReveal({ children }) {
  return (
    <span data-hover-reveal style={hoverRevealStyle}>{children}</span>
  )
}
