'use client'

import { useState } from 'react'

export function useReveal() {
  const [shown, setShown] = useState(false)

  return {
    shown,
    show: () => setShown(true),
    hide: () => setShown(false)
  }
}
