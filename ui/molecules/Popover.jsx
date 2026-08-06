'use client'

import { useRef } from 'react'
import { wrapStyle } from './Popover.styles'
import { useOutsideClose } from './useOutsideClose'
import { useAnchorRect } from './useAnchorRect'
import { PopoverPanel } from './PopoverPanel'

/**
 * Anchored popover, closing on outside click; the panel is portaled to
 * `<body>` so a scrolling, overflow, or hover-transformed ancestor
 * can't clip or mis-anchor it, and ranks above a dialog so a menu opened
 * from inside a `Modal` stays visible and clickable. `placement` hangs
 * the panel below the trigger (default) or beside it (`'right'`, for the
 * sidebar rail).
 */
export function Popover(props) {
  const { open, onClose, trigger, align, placement, children } = props
  const ref = useRef(null)
  const panelRef = useRef(null)
  const rect = useAnchorRect(ref, open)
  useOutsideClose(ref, onClose, open, panelRef)

  return (
    <div ref={ref} style={wrapStyle}>
      {trigger}
      <PopoverPanel open={open} align={align} rect={rect} placement={placement}
        panelRef={panelRef}>
        {children}
      </PopoverPanel>
    </div>
  )
}
