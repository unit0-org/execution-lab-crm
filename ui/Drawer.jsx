'use client'

import { useEffect } from 'react'
import { backdropStyle, panelStyle } from './Drawer.styles'

export function Drawer({ open, onClose, children }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)

    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null

  return (
    <>
      <div style={backdropStyle} onClick={onClose} />
      <aside style={panelStyle}>{children}</aside>
    </>
  )
}
