import { noteDeepLink } from './noteDeepLink'

// Email template vars for a mention notification.
export function mentionVars(input) {
  return {
    actor_name: input.actorName || 'A teammate',
    contact_name: input.contactName || 'a contact',
    note_excerpt: input.noteExcerpt || '',
    note_url: noteDeepLink(input.contactId, input.noteId)
  }
}
