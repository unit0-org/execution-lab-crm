import { NavLink } from '../atoms/NavLink'
import { flyoutLabelStyle, flyoutMenuStyle } from './NavFlyout.styles'

// The category's links inside the rail flyout: text-only rows (the panel's
// heading already says which category they belong to). `hover` is the
// menu's own hover pair — the panel is portaled out of the rail, so
// without it the menu closes the moment the pointer leaves the glyph.
export function NavFlyoutMenu(props) {
  const { label, items, currentPath, onNavigate, hover } = props

  return (
    <div style={flyoutMenuStyle} {...hover}>
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
