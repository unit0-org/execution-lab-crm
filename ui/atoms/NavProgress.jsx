'use client'

import { useLinkStatus } from 'next/link'
import { ProgressBar } from './ProgressBar'
import { navProgressStyle } from './NavProgress.styles'

// Native top-of-page progress while a Link navigation is pending, so the
// app gives navigation feedback without a layout-shaped skeleton.
export function NavProgress() {
  const { pending } = useLinkStatus()

  if (!pending) return null

  return (
    <div style={navProgressStyle}>
      <ProgressBar />
    </div>
  )
}
