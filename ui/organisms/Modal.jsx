'use client'

import { overlayStyle, panelStyle } from './Modal.styles'
import { ModalClose } from './ModalClose'
import { useEscClose } from '../molecules/useEscClose'
import { useAutoFocus } from '../molecules/useAutoFocus'

const stopInside = (e) => e.stopPropagation()

// Centered dialog over a dimmed backdrop; click outside, Esc, or the
// X to close. Focuses its first field on open.
export function Modal({ open, onClose, children }) {
  useEscClose(onClose, open)
  const panel = useAutoFocus(open)

  if (!open) return null

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div ref={panel} style={panelStyle} onClick={stopInside}>
        <ModalClose onClose={onClose} />
        {children}
      </div>
    </div>
  )
}
