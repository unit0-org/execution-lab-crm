import { Notification } from '../models'

// Mark all of the member's unread notifications read.
export function markAllRead(recipientUserId) {
  return Notification.update(
    { read_at: new Date() },
    {
      where: { recipient_user_id: recipientUserId, read_at: null }
    }
  )
}
