'use client'

import { useState, useLayoutEffect } from 'react'

/**
 * The mounted panel's content height. Measured in a layout effect, so the
 * placement it feeds is decided before the browser paints and the menu is
 * never seen on the wrong side of its trigger. `scrollHeight`, not the
 * rect: the rect is already clamped by the max-height the placement sets,
 * and reading that back would let the two chase each other.
 *
 * `shown` must track whether the panel is actually in the DOM, not merely
 * whether the popover is open — the panel waits a render for its trigger to
 * be measured, and keying off `open` alone runs this before there is
 * anything to measure and then never again.
 */
export function usePanelHeight(ref, shown) {
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    if (!shown || !ref.current) return

    setHeight(ref.current.scrollHeight)
  }, [ref, shown])

  return height
}
