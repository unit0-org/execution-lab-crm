import { Icon } from '../atoms/Icon'
import { NavCount } from '../atoms/NavCount'
import { navGroupHeaderStyle, chevronStyle } from './NavGroup.styles'

// The category's tappable label; the chevron rotates open via CSS. A closed
// category wears its children's rolled-up count, so folding it away never
// hides the fact that something below needs attention.
export function NavGroupHeader({ label, onToggle, open, badge }) {
  return (
    <button type="button" data-nav-group-header onClick={onToggle}
      aria-expanded={open} style={navGroupHeaderStyle}>
      <span data-nav-label>{label}</span>
      <NavCount count={badge} />
      <span data-nav-chevron style={chevronStyle}>
        <Icon name="chevronRight" size={14} />
      </span>
    </button>
  )
}
