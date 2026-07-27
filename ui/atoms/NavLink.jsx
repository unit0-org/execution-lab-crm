import NextLink from 'next/link'
import { NavIconSlot } from './NavIconSlot'
import { NavCount } from './NavCount'
import { NavProgress } from './NavProgress'
import { navLinkStyle } from './NavLink.styles'

/**
 * Sidebar navigation entry: icon + label, marked when `active`
 * (`newTab` opens the link in a new tab). `badge` = how many items that
 * page has waiting, shown as a count pill.
 */
export function NavLink(props) {
  const { href, active, icon, badge, children, onNavigate, newTab } = props
  const current = active || undefined
  const target = newTab ? '_blank' : undefined
  const rel = newTab ? 'noopener noreferrer' : undefined

  return (
    <NextLink href={href} data-nav-item data-active={current} target={target}
      rel={rel} style={navLinkStyle} title={children} onClick={onNavigate}>
      <NavIconSlot icon={icon} />
      <span data-nav-label>{children}</span>
      <NavCount count={badge} />
      <NavProgress />
    </NextLink>
  )
}
