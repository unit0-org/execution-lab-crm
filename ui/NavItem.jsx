'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItemStyle } from './NavList.styles'

const isActiveFor = (current, href) =>
  href === '/' ? current === '/' : (current === href || current.startsWith(`${href}/`))

export function NavItem({ href, children }) {
  const current = usePathname()

  return <Link href={href} style={navItemStyle(isActiveFor(current, href))}>{children}</Link>
}
