import NextLink from 'next/link'
import { Icon } from './Icon'
import { navLinkStyle } from './NavLink.styles'

export function NavLink({ href, active, icon, children }) {
  const current = active || undefined

  return (
    <NextLink href={href} data-nav-item data-active={current}
      style={navLinkStyle} title={children}>
      <span data-nav-icon><Icon name={icon} size={18} /></span>
      <span data-nav-label>{children}</span>
    </NextLink>
  )
}
