import NextLink from 'next/link'
import { NavIcon } from './NavIcon'
import { navLinkStyle, navIconStyle } from './NavLink.styles'

export function NavLink({ href, active, icon, children }) {
  const current = active || undefined

  return (
    <NextLink href={href} data-nav-item data-active={current}
      style={navLinkStyle} title={children}>
      <span data-nav-icon style={navIconStyle}><NavIcon icon={icon} /></span>
      <span data-nav-label>{children}</span>
    </NextLink>
  )
}
