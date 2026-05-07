'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItemStyle } from './NavList.styles'

const isActiveFor = (current, href) =>
  href === '/' ? current === '/' : (current === href || current.startsWith(`${href}/`))

export function NavItem({ href, children }) {
  const current = usePathname()
  const active = isActiveFor(current, href)
  return (
    <Link href={href} prefetch style={navItemStyle(active)} data-nav-item data-active={active || undefined}>
      {children}
    </Link>
  )
}
