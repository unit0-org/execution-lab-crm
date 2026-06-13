'use client'

import { useLinkStatus } from 'next/link'
import { navProgressStyle, navBarStyle } from './NavProgress.styles'

// A thin brand-gradient bar at the very top of the page while a Link
// navigation is pending — sleek loading feedback, no layout skeleton.
export function NavProgress() {
  const { pending } = useLinkStatus()

  if (!pending) return null

  return (
    <div style={navProgressStyle}>
      <div style={navBarStyle} />
    </div>
  )
}
