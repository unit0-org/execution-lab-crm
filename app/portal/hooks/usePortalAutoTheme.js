'use client'

import { useEffect } from 'react'
import { applyPortalTheme } from './portalThemeStore'

const MINUTE = 60 * 1000

// Re-derive the portal theme on mount and each minute, so an auto schedule
// flips at its configured switch times while a page stays open.
export function usePortalAutoTheme() {
  useEffect(() => {
    applyPortalTheme()
    const id = setInterval(applyPortalTheme, MINUTE)

    return () => clearInterval(id)
  }, [])
}
