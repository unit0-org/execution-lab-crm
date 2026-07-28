import { Icon } from '../atoms/Icon'
import { NavCount } from '../atoms/NavCount'
import { NavIconSlot } from '../atoms/NavIconSlot'
import { navGroupHeaderStyle, chevronStyle } from './NavGroup.styles'

// The category's own nav row — glyph, label, then a chevron the CSS flips
// when it opens. A closed category wears its children's rolled-up count, so
// folding it away never hides the fact that something below needs attention.
export function NavGroupHeader({ label, icon, onToggle, open, badge }) {
  return (
    <button type="button" data-nav-group-header onClick={onToggle}
      aria-expanded={open} style={navGroupHeaderStyle}>
      <NavIconSlot icon={icon} />
      <span data-nav-label>{label}</span>
      <NavCount count={badge} />
      <span data-nav-chevron style={chevronStyle}>
        <Icon name="chevron" size={16} />
      </span>
    </button>
  )
}
