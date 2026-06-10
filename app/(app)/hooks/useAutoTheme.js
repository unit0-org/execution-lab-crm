'use client'

import { useEffect } from 'react'
import { applyScheduledTheme } from './themeStore'

const MINUTE = 60 * 1000

// Re-check the clock theme on mount and each minute, so it flips at the
// 18:00 / 05:00 boundaries while the app stays open.
export function useAutoTheme() {
  useEffect(() => {
    applyScheduledTheme()
    const id = setInterval(applyScheduledTheme, MINUTE)

    return () => clearInterval(id)
  }, [])
}
