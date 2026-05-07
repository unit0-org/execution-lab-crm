'use client'

import { useEffect, useState } from 'react'

// Sync hook: returns { open, openModal, closeModal, toggle }.
// Listens for Ctrl+K / Cmd+K to toggle. Default state: closed.
export function useCtrlK() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', onKey)

    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return { open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }
}
