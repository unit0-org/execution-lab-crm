import { NavLink } from '../atoms/NavLink'
import { navStyle } from './Nav.styles'

export function Nav({ items, currentPath, collapsed }) {
  return (
    <nav style={navStyle}>
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          icon={item.icon}
          collapsed={collapsed}
          active={currentPath === item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
