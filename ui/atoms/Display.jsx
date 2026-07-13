import { displayStyle } from './Display.styles'

/**
 * Oversized uppercase display headline (`sm`/`md`/`lg`/`xl`) for portal
 * hero/section titles. Renders an `<h1>`.
 */
export function Display({ size = 'md', children }) {
  return <h1 style={displayStyle(size)}>{children}</h1>
}
