import NextLink from 'next/link'
import { Icon } from './Icon'
import { navLinkStyle, labelStyle } from './NavLink.styles'

export function NavLink({ href, active, icon, collapsed, children }) {
  const current = active || undefined

  return (
    <NextLink href={href} data-nav-item data-active={current}
      style={navLinkStyle(collapsed)} title={children}>
      <span data-nav-icon><Icon name={icon} size={18} /></span>
      <span style={labelStyle(collapsed)}>{children}</span>
    </NextLink>
  )
}
