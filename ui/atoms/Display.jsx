import { displayStyle } from './Display.styles'

// Oversized uppercase display headline (Montserrat 900) for portal hero
// and screen titles. Renders an <h1>.
export function Display({ size = 'md', children }) {
  return <h1 style={displayStyle(size)}>{children}</h1>
}
