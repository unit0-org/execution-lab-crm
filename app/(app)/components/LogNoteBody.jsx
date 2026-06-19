import { NoteForm } from '../contacts/components/NoteForm'
import { reserveStyle } from './LogNoteBody.styles'

// The note form appears only once a person is chosen (so we never submit a
// note without a contact); until then we reserve room for the contact
// dropdown to open without the modal clipping it.
export function LogNoteBody({ contactId, onSaved, onCancel }) {
  if (!contactId) return <div style={reserveStyle} />

  return (
    <NoteForm contactId={contactId} label="Log"
      onSaved={onSaved} onCancel={onCancel} />
  )
}
