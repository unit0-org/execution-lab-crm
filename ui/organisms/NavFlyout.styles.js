import { space } from '../tokens/space'
import { color } from '../tokens/color'
import { navLinkStyle } from '../atoms/NavLink.styles'

// The rail trigger wears the nav row's styling but must fill the rail, so
// its glyph lands exactly where every other rail glyph does. No `display`:
// globals.css owns that (see the navLinkStyle note).
export const railButtonStyle = {
  ...navLinkStyle,
  width: '100%',
  background: 'none',
  border: 'none',
  cursor: 'pointer'
}

// The panel's heading: the category name the icons no longer show.
export const flyoutLabelStyle = {
  padding: `0 ${space[3]} ${space[2]}`,
  color: color.text.muted,
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em'
}

export const flyoutMenuStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: space[1],
  minWidth: '180px'
}
