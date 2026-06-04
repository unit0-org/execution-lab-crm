import NextLink from 'next/link'
import { NavIcon } from './NavIcon'
import { navLinkStyle } from './NavLink.styles'

export function NavLink({ href, active, icon, emoji, children }) {
  const current = active || undefined

  return (
    <NextLink href={href} data-nav-item data-active={current}
      style={navLinkStyle} title={children}>
      <span data-nav-icon><NavIcon icon={icon} emoji={emoji} /></span>
      <span data-nav-label>{children}</span>
    </NextLink>
  )
}
