import { Notification } from '../models'

// Mark one of the member's notifications read (scoped to them).
export function markRead(recipientUserId, id) {
  return Notification.update(
    { read_at: new Date() },
    {
      where: { id, recipient_user_id: recipientUserId, read_at: null }
    }
  )
}
