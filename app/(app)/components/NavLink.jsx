'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinkStyle } from './NavLink.styles'

const isActiveFor = (current, href) => current === href || current.startsWith(`${href}/`)

export function NavLink({ href, children }) {
  const current = usePathname()
  const active = href === '/' ? current === '/' : isActiveFor(current, href)

  return <Link href={href} style={navLinkStyle(active)}>{children}</Link>
}
