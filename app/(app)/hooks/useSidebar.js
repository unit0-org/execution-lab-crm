'use client'

import { useState, useSyncExternalStore } from 'react'
import { readCollapsed, subscribeCollapsed, writeCollapsed }
  from './collapseStore'

export function useSidebar() {
  const [open, setOpen] = useState(false)
  const collapsed = useSyncExternalStore(
    subscribeCollapsed, readCollapsed, () => false
  )

  return {
    open,
    collapsed,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
    toggleCollapse: () => writeCollapsed(!collapsed)
  }
}
