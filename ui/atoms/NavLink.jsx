import NextLink from 'next/link'
import { NavIcon } from './NavIcon'
import { NavProgress } from './NavProgress'
import { navLinkStyle, navIconStyle } from './NavLink.styles'

export function NavLink(props) {
  const { href, active, icon, children, onNavigate, newTab } = props
  const current = active || undefined
  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noopener noreferrer' : undefined

  return (
    <NextLink href={href} data-nav-item data-active={current} target={target}
      rel={rel} style={navLinkStyle} title={children} onClick={onNavigate}>
      <span data-nav-icon style={navIconStyle}><NavIcon icon={icon} /></span>
      <span data-nav-label>{children}</span>
      <NavProgress />
    </NextLink>
  )
}
