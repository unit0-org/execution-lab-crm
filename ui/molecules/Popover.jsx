'use client'

import { useRef } from 'react'
import { wrapStyle, panelStyle } from './Popover.styles'
import { useOutsideClose } from './useOutsideClose'

function PopoverPanel({ open, children }) {
  if (!open) return null

  return <div style={panelStyle}>{children}</div>
}

// A trigger with a panel that opens beneath it; closes on outside click.
export function Popover({ open, onClose, trigger, children }) {
  const ref = useRef(null)
  useOutsideClose(ref, onClose, open)

  return (
    <div ref={ref} style={wrapStyle}>
      {trigger}
      <PopoverPanel open={open}>{children}</PopoverPanel>
    </div>
  )
}
