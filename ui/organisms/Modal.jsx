'use client'

import { createPortal } from 'react-dom'
import { overlayStyle, panelStyle } from './Modal.styles'
import { ModalClose } from './ModalClose'
import { useEscClose } from '../molecules/useEscClose'
import { useAutoFocus } from '../molecules/useAutoFocus'
import { useBackdropClose } from '../molecules/useBackdropClose'

/**
 * Centered dialog over a dimmed backdrop — Esc, click outside, or the X
 * closes it; focuses its first field on open. `wide` widens it, scrolls
 * when tall, and is resizable (drag the bottom-right corner). `align="top"`
 * pins it to the top instead of centering.
 */
export function Modal({ open, onClose, wide, align, children }) {
  useEscClose(onClose, open)
  const panel = useAutoFocus(open)
  const backdrop = useBackdropClose(onClose)

  // There is no <body> to portal into while rendering on the server, and a
  // dialog that opens on mount would crash the whole page. It opens on the
  // client anyway, so skipping the server pass costs nothing.
  if (!open || typeof document === 'undefined') return null

  // Portaled to <body>: a transformed ancestor (a section's entrance
  // animation, a card that lifts on hover) becomes the containing block
  // for `position: fixed`, which sizes the backdrop to that ancestor and
  // centres the dialog on the section it was opened from, not the screen.
  return createPortal(
    <div style={overlayStyle(align)} {...backdrop}>
      <div ref={panel} style={panelStyle(wide)}>
        <ModalClose onClose={onClose} />
        {children}
      </div>
    </div>,
    document.body
  )
}
