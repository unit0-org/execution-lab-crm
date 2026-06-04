'use client'

import { useEffect } from 'react'

// Calls onClose when a pointer-down lands outside the ref while `open`.
export function useOutsideClose(ref, onClose, open) {
  useEffect(() => {
    if (!open) return

    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) onClose()
    }

    document.addEventListener('mousedown', onDown)

    return () => document.removeEventListener('mousedown', onDown)
  }, [ref, onClose, open])
}
