'use client'

import { useState, useEffect } from 'react'

// The anchor element's viewport rect, measured each time it opens — so a
// fixed-position menu can sit directly under its trigger.
export function useAnchorRect(ref, open) {
  const [rect, setRect] = useState(null)

  useEffect(() => {
    if (!open || !ref.current) return

    setRect(ref.current.getBoundingClientRect())
  }, [ref, open])

  return rect
}
