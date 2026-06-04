'use client'

import { useEffect } from 'react'

// Calls onClose when Escape is pressed while `open`.
export function useEscClose(onClose, open) {
  useEffect(() => {
    if (!open) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)

    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, open])
}
