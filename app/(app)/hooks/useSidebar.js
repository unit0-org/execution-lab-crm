'use client'

import { useState } from 'react'
import { toggleCollapsed } from './collapseStore'

export function useSidebar() {
  const [open, setOpen] = useState(false)

  return {
    open,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
    toggleCollapse: toggleCollapsed
  }
}
