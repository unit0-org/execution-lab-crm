import { Notification } from '../models'
import { Contact, ContactNote } from '@/lib/contact/models'
import { toNotification } from './toNotification'

// A member's notifications, newest first, with contact + note context.
export async function listNotifications(recipientUserId) {
  const rows = await Notification.findAll({
    where: { recipient_user_id: recipientUserId },
    include: [Contact, ContactNote],
    order: [['created_at', 'DESC']],
    limit: 50
  })

  return rows.map(toNotification)
}
