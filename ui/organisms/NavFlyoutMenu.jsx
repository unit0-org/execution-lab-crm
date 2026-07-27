import { NavLink } from '../atoms/NavLink'
import { flyoutLabelStyle, flyoutMenuStyle } from './NavFlyout.styles'

// The category's links inside the rail flyout: text-only rows (the panel's
// heading already says which category they belong to).
export function NavFlyoutMenu({ label, items, currentPath, onNavigate }) {
  return (
    <div style={flyoutMenuStyle}>
      <div style={flyoutLabelStyle}>{label}</div>
      {items.map((item) => (
        <NavLink key={item.href} href={item.href} badge={item.badge}
          active={currentPath === item.href} onNavigate={onNavigate}>
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
