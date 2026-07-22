'use client'

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

  if (!open) return null

  return (
    <div style={overlayStyle(align)} {...backdrop}>
      <div ref={panel} style={panelStyle(wide)}>
        <ModalClose onClose={onClose} />
        {children}
      </div>
    </div>
  )
}
