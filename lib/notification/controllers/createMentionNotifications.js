import { Notification } from '../models'

// One in-app notification per recipient for a note mention.
export function createMentionNotifications(input) {
  const rows = input.recipientUserIds.map((userId) => ({
    recipient_user_id: userId,
    type: 'mention',
    contact_id: input.contactId,
    contact_note_id: input.noteId,
    actor_user_id: input.actorUserId
  }))

  return Notification.bulkCreate(rows)
}
