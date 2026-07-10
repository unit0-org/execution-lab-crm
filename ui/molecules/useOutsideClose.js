'use client'

import { useEffect } from 'react'

// Calls onClose on a pointer-down outside the ref — and outside an optional
// extra ref (e.g. a panel portaled out of the trigger's subtree) — while open.
export function useOutsideClose(ref, onClose, open, extraRef) {
  useEffect(() => {
    if (!open) return

    const onDown = (e) => {
      const inside = ref.current?.contains(e.target)
        || extraRef?.current?.contains(e.target)

      if (!inside) onClose()
    }

    document.addEventListener('mousedown', onDown)

    return () => document.removeEventListener('mousedown', onDown)
  }, [ref, onClose, open, extraRef])
}
