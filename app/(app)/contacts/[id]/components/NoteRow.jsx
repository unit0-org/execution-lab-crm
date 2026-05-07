import { Inline } from '@/ui/Inline'
import { Text } from '@/ui/Text'
import { rowStyle, headerStyle } from './NoteRow.styles'
import { TimelineDate } from './TimelineDate'
import { PinNoteForm } from './PinNoteForm'
import { RemoveNoteForm } from './RemoveNoteForm'

export function NoteRow({ contactId, note }) {
  return (
    <article style={rowStyle}>
      <div style={headerStyle}>
        <TimelineDate iso={note.updated_at || note.created_at} />
        <Inline gap="sm">
          <PinNoteForm contactId={contactId} noteId={note.id} pinned={note.pinned} />
          <RemoveNoteForm contactId={contactId} noteId={note.id} />
        </Inline>
      </div>
      <Text>{note.body}</Text>
    </article>
  )
}
