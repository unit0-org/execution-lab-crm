import { dispatchTrigger } from '../dispatchTrigger'

// Bridge: a note was added to a contact.
export function dispatchNoteAdded(contactId) {
  return dispatchTrigger('note_added', { contactId })
}
