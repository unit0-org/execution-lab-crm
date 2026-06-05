'use client'

import { overlayStyle, panelStyle } from './Modal.styles'
import { useEscClose } from '../molecules/useEscClose'
import { useAutoFocus } from '../molecules/useAutoFocus'

const stopInside = (e) => e.stopPropagation()

// Centered dialog over a dimmed backdrop; click outside or Esc to close.
// Focuses its first field on open.
export function Modal({ open, onClose, children }) {
  useEscClose(onClose, open)
  const panel = useAutoFocus(open)

  if (!open) return null

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div ref={panel} style={panelStyle} onClick={stopInside}>
        {children}
      </div>
    </div>
  )
}
