'use client'

import { useState, useEffect } from 'react'
import { toggleTheme } from '../../hooks/themeStore'

const isDark = () =>
  document.documentElement.getAttribute('data-theme') === 'dark'

// Read the current light/dark theme and flip it (themeStore persists it).
export function useTheme() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(isDark())
  }, [])

  const toggle = () => {
    toggleTheme()
    setDark(isDark())
  }

  return { dark, toggle }
}
