'use client'

import { overlayStyle, panelStyle } from './Modal.styles'

const stopInside = (e) => e.stopPropagation()

// Centered dialog over a dimmed backdrop; click outside to close.
export function Modal({ open, onClose, children }) {
  if (!open) return null

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={panelStyle} onClick={stopInside}>
        {children}
      </div>
    </div>
  )
}
