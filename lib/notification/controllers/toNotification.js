import { noteDeepLink } from './noteDeepLink'

const snippet = (body) => (body ? body.slice(0, 80) : '')

// Shape a notification row for the bell: who/where, a short note snippet,
// and a deep link to the exact note.
export function toNotification(row) {
  const n = row.toJSON()
  const contact = n.contact || {}
  const note = n.contact_note || {}

  return {
    id: n.id,
    type: n.type,
    contactName: contact.full_name || 'a contact',
    snippet: snippet(note.body),
    href: noteDeepLink(n.contact_id, n.contact_note_id),
    readAt: n.read_at,
    createdAt: n.created_at
  }
}
