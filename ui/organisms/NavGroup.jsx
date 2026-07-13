import { NavLink } from '../atoms/NavLink'
import { NavGroupHeader } from './NavGroupHeader'
import { useNavGroup } from './useNavGroup'
import { navGroupStyle } from './NavGroup.styles'

/**
 * A nav category: a tappable header that expands its child links, open
 * when one of them matches `currentPath`.
 */
export function NavGroup({ label, items, currentPath, onNavigate }) {
  const { open, toggle } = useNavGroup(items, currentPath)
  const expanded = open || undefined

  return (
    <div data-nav-group data-open={expanded} style={navGroupStyle}>
      <NavGroupHeader label={label} onToggle={toggle} open={open} />
      {items.map((item) => (
        <NavLink key={item.href} href={item.href} icon={item.icon}
          active={currentPath === item.href} onNavigate={onNavigate}>
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
