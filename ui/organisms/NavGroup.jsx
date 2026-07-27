import { NavLink } from '../atoms/NavLink'
import { NavGroupHeader } from './NavGroupHeader'
import { NavFlyout } from './NavFlyout'
import { useNavGroup } from './useNavGroup'
import { navBadgeTotal } from './navBadgeTotal'
import { navGroupStyle } from './NavGroup.styles'

/**
 * A nav category: a tappable header that expands its child links, open
 * when one of them matches `currentPath`. In the collapsed rail the whole
 * category becomes one glyph (`icon`) that opens its links in a flyout.
 */
export function NavGroup({ label, icon, items, currentPath, onNavigate }) {
  const { open, toggle } = useNavGroup(items, currentPath)
  const expanded = open || undefined
  const hidden = open ? 0 : navBadgeTotal(items)

  return (
    <div data-nav-group data-open={expanded} style={navGroupStyle}>
      <NavGroupHeader label={label} onToggle={toggle} open={open}
        badge={hidden} />
      {items.map((item) => (
        <NavLink key={item.href} href={item.href} icon={item.icon}
          badge={item.badge} active={currentPath === item.href}
          onNavigate={onNavigate}>
          {item.label}
        </NavLink>
      ))}
      <NavFlyout label={label} icon={icon} items={items}
        currentPath={currentPath} onNavigate={onNavigate} />
    </div>
  )
}
