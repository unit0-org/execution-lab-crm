'use client'

import { useState } from 'react'
import { loadList, clearAll, openItem } from './notificationOps'

// Bell state: SSR-seeded unread count, the list lazy-loaded on open, and
// mark-read on click / mark-all.
export function useNotifications(initialUnread) {
  const [open, setOpen] = useState(false)
  const [unread, setUnread] = useState(initialUnread || 0)
  const [items, setItems] = useState([])

  const toggle = () => {
    const next = !open

    setOpen(next)

    if (next) loadList().then(setItems)
  }

  const markAll = () => clearAll().then(() => setUnread(0))

  return {
    open, unread, items, toggle, item: openItem, markAll,
    close: () => setOpen(false)
  }
}
