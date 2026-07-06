'use client'

import { useRef } from 'react'

// Closes only when the press both starts and ends on the backdrop, so a
// text selection that drifts past the panel edge never dismisses the modal.
export function useBackdropClose(onClose) {
  const pressedBackdrop = useRef(false)

  const onMouseDown = (e) => {
    pressedBackdrop.current = e.target === e.currentTarget
  }

  const onClick = (e) => {
    const onBackdrop = e.target === e.currentTarget

    if (onBackdrop && pressedBackdrop.current) onClose()
  }

  return { onMouseDown, onClick }
}
