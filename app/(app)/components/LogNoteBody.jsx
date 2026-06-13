import { LogNoteForm } from './LogNoteForm'
import { reserveStyle } from './LogNoteBody.styles'

// The note form appears only once a person is chosen (so we never submit a
// note without a contact); until then we reserve room for the contact
// dropdown to open without the modal clipping it.
export function LogNoteBody({ contactId, onSaved }) {
  if (!contactId) return <div style={reserveStyle} />

  return <LogNoteForm contactId={contactId} onSaved={onSaved} />
}
