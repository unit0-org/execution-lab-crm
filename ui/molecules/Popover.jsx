'use client'

import { useRef } from 'react'
import { wrapStyle, panelStyle } from './Popover.styles'
import { useOutsideClose } from './useOutsideClose'

function PopoverPanel({ open, align, children }) {
  if (!open) return null

  return <div style={panelStyle(align)}>{children}</div>
}

// A trigger with a panel that opens beneath it; closes on outside click.
// `align="end"` hangs the panel from the trigger's right edge.
export function Popover({ open, onClose, trigger, align, children }) {
  const ref = useRef(null)
  useOutsideClose(ref, onClose, open)

  return (
    <div ref={ref} style={wrapStyle}>
      {trigger}
      <PopoverPanel open={open} align={align}>{children}</PopoverPanel>
    </div>
  )
}
