'use client'

import { useLinkStatus } from 'next/link'
import { navProgressStyle, navBarStyle } from './NavProgress.styles'

/**
 * Fixed top progress bar (thin brand-gradient) shown while a `Link`
 * navigation is pending; rendered inside the link atoms, not directly.
 */
export function NavProgress() {
  const { pending } = useLinkStatus()

  if (!pending) return null

  return (
    <div style={navProgressStyle}>
      <div style={navBarStyle} />
    </div>
  )
}
