import { NavIcon } from './NavIcon'
import { navIconStyle } from './NavLink.styles'

// A nav entry's glyph, or nothing at all: links inside a rail flyout are
// text-only, so the row must not reserve an empty icon box.
export function NavIconSlot({ icon }) {
  if (!icon) return null

  return (
    <span data-nav-icon style={navIconStyle}><NavIcon icon={icon} /></span>
  )
}
