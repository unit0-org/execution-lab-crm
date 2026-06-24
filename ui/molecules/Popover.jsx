'use client'

import { useRef } from 'react'
import { wrapStyle, panelStyle } from './Popover.styles'
import { useOutsideClose } from './useOutsideClose'
import { useAnchorRect } from './useAnchorRect'

function PopoverPanel({ open, align, rect, children }) {
  if (!open || !rect) return null

  return <div style={panelStyle(align, rect)}>{children}</div>
}

// A trigger with a panel that opens beneath it; closes on outside click.
// The panel is fixed-positioned from the trigger's rect (same trick as
// AutocompleteMenu) so a scrolling/overflow ancestor can't clip it.
export function Popover({ open, onClose, trigger, align, children }) {
  const ref = useRef(null)
  const rect = useAnchorRect(ref, open)
  useOutsideClose(ref, onClose, open)

  return (
    <div ref={ref} style={wrapStyle}>
      {trigger}
      <PopoverPanel open={open} align={align} rect={rect}>
        {children}
      </PopoverPanel>
    </div>
  )
}
