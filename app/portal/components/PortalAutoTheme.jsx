'use client'

import { usePortalAutoTheme } from '../hooks/usePortalAutoTheme'

// Keeps the auto theme current on every portal surface; renders nothing.
export function PortalAutoTheme() {
  usePortalAutoTheme()

  return null
}
