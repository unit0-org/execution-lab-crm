import { space } from '../tokens/space'
import { radius } from '../tokens/radius'

export const navLinkStyle = {
  display: 'flex',
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
