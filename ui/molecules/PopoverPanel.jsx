'use client'

import { createPortal } from 'react-dom'
import { panelStyle } from './Popover.styles'
import { usePanelHeight } from './usePanelHeight'

// The Popover's floating panel: fixed-positioned from the trigger's rect and
// portaled to <body>, so a scrolling, overflow, or transformed ancestor (e.g.
// a card that lifts on hover) can't clip or mis-anchor it. Hidden until it has
// a measured rect. Its own height picks the side it hangs from.
export function PopoverPanel(props) {
  const { open, align, rect, placement, panelRef, children } = props
  const shown = Boolean(open && rect)
  const height = usePanelHeight(panelRef, shown)

  if (!shown) return null

  return createPortal(
    <div ref={panelRef} style={panelStyle(align, rect, placement, height)}>
      {children}
    </div>,
    document.body
  )
}
