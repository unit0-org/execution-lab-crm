'use client'

import { useRef, useState } from 'react'

// The panel opens clear of its trigger, so the pointer crosses open air to
// reach it. Closing a beat late is what makes that crossing possible —
// close on the leave itself and the menu vanishes mid-move.
const CLOSE_DELAY_MS = 250

/**
 * A menu that opens on hover and closes a beat after the pointer leaves.
 * Spread `hoverProps` on the trigger *and* on the panel — a portaled panel
 * is not inside the trigger, so it has to hold the menu open itself.
 * `toggle` keeps it usable by click, where there is no hover at all.
 */
export function useHoverMenu() {
  const [open, setOpen] = useState(false)
  const timer = useRef(null)

  const set = (next) => {
    clearTimeout(timer.current)
    setOpen(next)
  }

  const hideSoon = () => {
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpen(false), CLOSE_DELAY_MS)
  }

  return {
    open,
    hide: () => set(false),
    toggle: () => set(!open),
    hoverProps: { onMouseEnter: () => set(true), onMouseLeave: hideSoon }
  }
}
