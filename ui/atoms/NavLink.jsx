import NextLink from 'next/link'
import { navLinkStyle } from './NavLink.styles'

export function NavLink({ href, active, children }) {
  const current = active || undefined

  return (
    <NextLink
      href={href}
      data-nav-item
      data-active={current}
      style={navLinkStyle}
    >
      {children}
    </NextLink>
  )
}
