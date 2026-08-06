import { color } from '../tokens/color'

// The two halves sit flush and share a height; the 1px of surface showing
// between them is the divider, which is what separates the default action
// from the caret on a filled tone (both halves are the same colour).
export const groupStyle = {
  display: 'inline-flex', alignItems: 'stretch', gap: '1px',
  background: color.bg.surface
}
