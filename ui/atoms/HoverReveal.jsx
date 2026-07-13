import { hoverRevealStyle } from './HoverReveal.styles'

/**
 * Reveal children on hover (or focus) of the host row
 * ([data-hover-host]). Always visible on touch devices (no hover).
 */
export function HoverReveal({ children }) {
  return (
    <span data-hover-reveal style={hoverRevealStyle}>{children}</span>
  )
}
