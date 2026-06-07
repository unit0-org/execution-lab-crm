'use client'

import { useState } from 'react'
import { toggleCollapsed } from './collapseStore'
import { toggleTheme } from './themeStore'

export function useSidebar() {
  const [open, setOpen] = useState(false)

  return {
    open,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
    toggleCollapse: toggleCollapsed,
    toggleTheme
  }
}
