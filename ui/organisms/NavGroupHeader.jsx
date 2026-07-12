import { Icon } from '../atoms/Icon'
import { navGroupHeaderStyle, chevronStyle } from './NavGroup.styles'

// The category's tappable label; the chevron rotates open via CSS.
export function NavGroupHeader({ label, onToggle, open }) {
  return (
    <button type="button" data-nav-group-header onClick={onToggle}
      aria-expanded={open} style={navGroupHeaderStyle}>
      <span data-nav-label>{label}</span>
      <span data-nav-chevron style={chevronStyle}>
        <Icon name="chevronRight" size={14} />
      </span>
    </button>
  )
}
