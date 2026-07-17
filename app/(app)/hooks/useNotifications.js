'use client'

import { useState } from 'react'
import { loadList, openItem, markItemRead, markAllRead }
  from './notificationOps'

// Bell state: SSR-seeded unread count, list lazy-loaded on open, plus
// per-item and mark-all read handlers.
export function useNotifications(initialUnread) {
  const [open, setOpen] = useState(false)
  const [unread, setUnread] = useState(initialUnread || 0)
  const [items, setItems] = useState([])

  const toggle = () => {
    const next = !open

    setOpen(next)

    if (next) loadList().then(setItems)
  }

  return {
    open, unread, items, toggle, item: openItem,
    markRead: markItemRead(setItems, setUnread),
    markAll: markAllRead(setItems, setUnread, setOpen),
    close: () => setOpen(false)
  }
}
