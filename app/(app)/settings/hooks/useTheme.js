'use client'

import { useSyncExternalStore } from 'react'
import { toggleTheme } from '../../hooks/themeStore'

const root = () => document.documentElement

const subscribe = (onChange) => {
  const observer = new MutationObserver(onChange)
  observer.observe(root(), { attributeFilter: ['data-theme'] })

  return () => observer.disconnect()
}

const isDark = () => root().getAttribute('data-theme') === 'dark'

// Track the light/dark theme (an external <html> attribute) and flip it.
export function useTheme() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false)

  return { dark, toggle: toggleTheme }
}
