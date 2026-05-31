'use client'

import { useState } from 'react'

export function useConfirm() {
  const [confirming, setConfirming] = useState(false)

  return {
    confirming,
    ask: () => setConfirming(true),
    cancel: () => setConfirming(false)
  }
}
