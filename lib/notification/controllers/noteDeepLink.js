import { siteOrigin } from '@/lib/portal/siteOrigin'

// Deep link to one note on a contact, anchored to that note.
export function noteDeepLink(contactId, noteId) {
  return `${siteOrigin()}/contacts/${contactId}#note-${noteId}`
}
