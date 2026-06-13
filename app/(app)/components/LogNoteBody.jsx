import { LogNoteForm } from './LogNoteForm'

// The note form appears only once a person is chosen, so we never submit
// a note without a contact.
export function LogNoteBody({ contactId, onSaved }) {
  if (!contactId) return null

  return <LogNoteForm contactId={contactId} onSaved={onSaved} />
}
