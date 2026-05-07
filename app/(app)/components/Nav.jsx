import { NavLink } from './NavLink'
import { navStyle } from './Nav.styles'

const ITEMS = [
  { href: '/',           label: 'Today' },
  { href: '/follow-ups', label: 'Follow-ups' },
  { href: '/contacts',   label: 'All people' },
  { href: '/labels',     label: 'Labels' },
]

export function Nav() {
  return (
    <nav style={navStyle}>
      {ITEMS.map((item) => (
        <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
      ))}
    </nav>
  )
}
