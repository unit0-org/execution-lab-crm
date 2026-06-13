'use client'

import { useEffect } from 'react'

const isCommandK = (e) =>
  (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'

// Opens the palette on Ctrl/Cmd+K from anywhere in the app.
export function useCommandKey(onOpen) {
  useEffect(() => {
    const onKey = (e) => {
      if (!isCommandK(e)) return

      e.preventDefault()
      onOpen()
    }

    window.addEventListener('keydown', onKey)

    return () => window.removeEventListener('keydown', onKey)
  }, [onOpen])
}
