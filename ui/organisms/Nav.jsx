import { NavLink } from '../atoms/NavLink'
import { navStyle } from './Nav.styles'

export function Nav({ items, currentPath, onNavigate }) {
  return (
    <nav style={navStyle}>
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={currentPath === item.href}
          onNavigate={onNavigate}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
