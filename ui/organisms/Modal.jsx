'use client'

import { overlayStyle, panelStyle } from './Modal.styles'
import { useEscClose } from '../molecules/useEscClose'

const stopInside = (e) => e.stopPropagation()

// Centered dialog over a dimmed backdrop; click outside or Esc to close.
export function Modal({ open, onClose, children }) {
  useEscClose(onClose, open)

  if (!open) return null

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={panelStyle} onClick={stopInside}>
        {children}
      </div>
    </div>
  )
}
