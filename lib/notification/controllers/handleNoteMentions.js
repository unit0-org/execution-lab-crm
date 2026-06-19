import { Contact } from '@/lib/contact/models'
import { recordNoteMentions } from './recordNoteMentions'
import { listNoteMentionUserIds } from './listNoteMentionUserIds'
import { notifyNewMentions } from './notifyNewMentions'

// Record a note's mentions and notify only the newly-added members,
// resolving the contact name for the email.
export async function handleNoteMentions(input) {
  const ids = [...new Set(input.mentionedUserIds || [])]

  if (ids.length === 0) return

  const existing = await listNoteMentionUserIds(input.noteId)

  await recordNoteMentions({ ...input, userIds: ids })
  const fresh = ids.filter((id) => !existing.includes(id))

  if (fresh.length === 0) return

  const contact = await Contact.findByPk(input.contactId)

  await notifyNewMentions({
    ...input,
    contactName: contact && contact.full_name,
    recipientUserIds: fresh
  })
}
