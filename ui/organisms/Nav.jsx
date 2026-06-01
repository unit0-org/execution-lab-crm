import { NavLink } from '../atoms/NavLink'
import { navStyle } from './Nav.styles'

export function Nav({ items, currentPath }) {
  return (
    <nav style={navStyle}>
      {items.map((item) => (
        <NavLink
          key={item.href}
          href={item.href}
          active={currentPath === item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
