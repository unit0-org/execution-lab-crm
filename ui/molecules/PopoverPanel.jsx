'use client'

import { createPortal } from 'react-dom'
import { panelStyle } from './Popover.styles'

// The Popover's floating panel: fixed-positioned from the trigger's rect and
// portaled to <body>, so a scrolling, overflow, or transformed ancestor (e.g.
// a card that lifts on hover) can't clip or mis-anchor it. Hidden until it has
// a measured rect.
export function PopoverPanel({ open, align, rect, panelRef, children }) {
  if (!open || !rect) return null

  return createPortal(
    <div ref={panelRef} style={panelStyle(align, rect)}>{children}</div>,
    document.body
  )
}
