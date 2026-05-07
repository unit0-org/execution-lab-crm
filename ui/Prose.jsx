import { proseStyle } from './Prose.styles'

// Read-only prose paragraph. variant="briefing" gives the editorial
// serif paper-card look (used for daily briefing); default is body.
export function Prose({ variant, children }) {
  return <p style={proseStyle(variant)}>{children}</p>
}
