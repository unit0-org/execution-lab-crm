'use client'

import { NotificationBell } from '@/ui/organisms/NotificationBell'
import { useNotifications } from '../hooks/useNotifications'

// Topbar notification bell wired to the member's notifications.
export function Notifications({ unread }) {
  const n = useNotifications(unread)

  return (
    <NotificationBell open={n.open} unread={n.unread} items={n.items}
      onToggle={n.toggle} onClose={n.close} onItem={n.item}
      onMarkRead={n.markRead} onMarkAll={n.markAll} />
  )
}
