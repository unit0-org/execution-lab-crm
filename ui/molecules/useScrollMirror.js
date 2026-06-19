'use client'

import { useRef } from 'react'

// Keep an overlay's scroll position in lockstep with the scrolled field.
export function useScrollMirror() {
  const mirror = useRef(null)

  const onScroll = (e) => {
    if (mirror.current) mirror.current.scrollTop = e.target.scrollTop
  }

  return { mirror, onScroll }
}
