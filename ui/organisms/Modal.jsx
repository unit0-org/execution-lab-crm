'use client'

import { overlayStyle, panelStyle } from './Modal.styles'
import { ModalClose } from './ModalClose'
import { useEscClose } from '../molecules/useEscClose'
import { useAutoFocus } from '../molecules/useAutoFocus'
import { useBackdropClose } from '../molecules/useBackdropClose'

// Centered dialog over a dimmed backdrop; click outside, Esc, or the
// X to close. Focuses its first field on open.
export function Modal({ open, onClose, wide, children }) {
  useEscClose(onClose, open)
  const panel = useAutoFocus(open)
  const backdrop = useBackdropClose(onClose)

  if (!open) return null

  return (
    <div style={overlayStyle} {...backdrop}>
      <div ref={panel} style={panelStyle(wide)}>
        <ModalClose onClose={onClose} />
        {children}
      </div>
    </div>
  )
}
