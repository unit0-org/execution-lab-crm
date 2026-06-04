'use client'

import { useState } from 'react'

// Boolean open/closed state with a toggle and explicit setters.
export function useToggle(initial = false) {
  const [open, setOpen] = useState(initial)

  return {
    open,
    toggle: () => setOpen((on) => !on),
    show: () => setOpen(true),
    hide: () => setOpen(false)
  }
}
