import { ConfirmInlineForm } from '@/ui/ConfirmInlineForm'
import { SubmitIconButton } from '@/ui/SubmitIconButton'
import { removeNote } from '../actions'

export function RemoveNoteForm({ contactId, noteId }) {
  return (
    <ConfirmInlineForm message="Delete this note?" action={removeNote}>
      <input type="hidden" name="contact_id" value={contactId} />
      <input type="hidden" name="note_id" value={noteId} />
      <SubmitIconButton label="Delete note">×</SubmitIconButton>
    </ConfirmInlineForm>
  )
}
