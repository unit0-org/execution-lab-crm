'use client'

import { useState, useEffect } from 'react'

const QUERY = '(max-width: 640px)'

// True on narrow (mobile) viewports. SSR-safe: starts false, then updates
// after mount and whenever the viewport crosses the breakpoint.
export function useIsMobile() {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener('change', update)

    return () => mq.removeEventListener('change', update)
  }, [])

  return mobile
}
