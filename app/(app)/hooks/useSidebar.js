'use client'

import { useState } from 'react'

export function useSidebar() {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((value) => !value)
  const close = () => setOpen(false)

  return { open, toggle, close }
}
