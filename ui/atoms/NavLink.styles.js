import { space } from '../tokens/space'
import { radius } from '../tokens/radius'

// No `display` here: it's set in globals.css so the nav-group collapse
// rule ([data-nav-group]:not([data-open]) → display:none) can win. An
// inline display would beat the stylesheet and never let items hide.
export const navLinkStyle = {
  alignItems: 'center',
  gap: space[3],
  padding: `${space[2]} ${space[3]}`,
  borderRadius: radius.md,
  textDecoration: 'none',
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em'
}

// Collapse the icon's inline-SVG line box so the glyph centers on the
// label instead of sitting on the text baseline (which raised it).
export const navIconStyle = {
  display: 'flex',
  alignItems: 'center'
}
