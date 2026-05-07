import { rowStyle } from './GridRow.styles'

// Generic grid-based list row — picks a template by name. Templates
// are defined in ./GridRow.styles.js so callers stay markup-only.
export function GridRow({ template, divider, align, children }) {
  return <div style={rowStyle({ template, divider, align })}>{children}</div>
}
