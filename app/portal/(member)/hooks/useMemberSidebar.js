'use client'

import { useState } from 'react'
import { toggleCollapsed } from '@/app/(app)/hooks/collapseStore'

// Member-portal sidebar state: the mobile drawer's open flag plus the
// shared collapse toggle. No theme — the portal owns its own light/dark.
export function useMemberSidebar() {
  const [open, setOpen] = useState(false)

  return {
    open,
    toggle: () => setOpen((value) => !value),
    close: () => setOpen(false),
    toggleCollapse: toggleCollapsed
  }
}
