import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { IconButton } from '@/ui/IconButton'
import { removeNote } from '../actions'

export function RemoveNoteForm({ contactId, noteId }) {
  return (
    <ConfirmInlineForm message="Delete this note?" action={removeNote}>
      <input type="hidden" name="contact_id" value={contactId} />
      <input type="hidden" name="note_id" value={noteId} />
      <IconButton type="submit" label="Delete note">×</IconButton>
    </ConfirmInlineForm>
  )
}
