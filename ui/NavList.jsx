import { navListStyle } from './NavList.styles'

// Vertical container for nav items. Items are passed as children
// (typically <NavItem href />) so callers stay in control of routing.
export function NavList({ children }) {
  return <nav style={navListStyle}>{children}</nav>
}
