'use client'

import { useState } from 'react'

export function useSidebar() {
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return {
    open,
    collapsed,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
    toggleCollapse: () => setCollapsed((value) => !value)
  }
}
