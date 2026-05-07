import { InlineForm } from '@/ui/InlineForm'
import { IconButton } from '@/ui/IconButton'
import { pinNote } from '../actions'

const labelFor = (pinned) => pinned ? 'Unpin' : 'Pin'
const glyphFor = (pinned) => pinned ? '★' : '☆'

export function PinNoteForm({ contactId, noteId, pinned }) {
  return (
    <InlineForm action={pinNote}>
      <input type="hidden" name="contact_id" value={contactId} />
      <input type="hidden" name="note_id" value={noteId} />
      <input type="hidden" name="pinned" value={String(!pinned)} />
      <IconButton type="submit" label={labelFor(pinned)}>{glyphFor(pinned)}</IconButton>
    </InlineForm>
  )
}
