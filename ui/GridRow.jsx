import { rowStyle } from './GridRow.styles'

// Generic grid-based list row — picks a template by name. Templates
// are defined in ./GridRow.styles.js so callers stay markup-only.
export function GridRow({ template, divider, align, variant, children }) {
  const dataCard = variant === 'card' ? { 'data-card-lift': '' } : {}
  return <div style={rowStyle({ template, divider, align, variant })} {...dataCard}>{children}</div>
}
