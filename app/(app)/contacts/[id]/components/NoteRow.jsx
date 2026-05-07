import { Card } from '@/ui/Card'
import { CardHeader } from '@/ui/CardHeader'
import { Inline } from '@/ui/Inline'
import { Text } from '@/ui/Text'
import { TimelineDate } from './TimelineDate'
import { PinNoteForm } from './PinNoteForm'
import { RemoveNoteForm } from './RemoveNoteForm'

export function NoteRow({ contactId, note }) {
  const actions = (
    <Inline gap="sm">
      <PinNoteForm contactId={contactId} noteId={note.id} pinned={note.pinned} />
      <RemoveNoteForm contactId={contactId} noteId={note.id} />
    </Inline>
  )

  return (
    <Card size="sm">
      <CardHeader title={<TimelineDate iso={note.updated_at || note.created_at} />} actions={actions} />
      <Text>{note.body}</Text>
    </Card>
  )
}
