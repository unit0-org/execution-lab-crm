'use client'

import { useState } from 'react'

export function useDisclosure() {
  const [open, setOpen] = useState(false)

  return { open, toggle: () => setOpen((v) => !v) }
}
