import { NavIconSlot } from '../atoms/NavIconSlot'
import { NavCount } from '../atoms/NavCount'
import { railButtonStyle } from './NavFlyout.styles'

// The collapsed rail's stand-in for a whole category: its glyph, its rolled-
// up count, and a click that opens the category's links in a flyout. It
// carries `data-nav-item` so it hovers and highlights like every nav row.
export function NavRailButton(props) {
  const { icon, label, badge, active, expanded, onClick } = props
  const current = active || undefined

  return (
    <button type="button" data-nav-item data-active={current}
      title={label} aria-expanded={expanded} aria-haspopup="menu"
      onClick={onClick} style={railButtonStyle}>
      <NavIconSlot icon={icon} />
      <NavCount count={badge} />
    </button>
  )
}
