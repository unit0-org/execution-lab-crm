import { Notification } from '../models'

// How many unread notifications a member has (for the bell badge).
export function unreadCount(recipientUserId) {
  return Notification.count({
    where: { recipient_user_id: recipientUserId, read_at: null }
  })
}
