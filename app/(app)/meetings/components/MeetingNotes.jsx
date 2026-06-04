import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { MeetingNoteItem } from './MeetingNoteItem'
import { AddNoteForm } from './AddNoteForm'

export function MeetingNotes({ notes, meetingId, onChanged }) {
  return (
    <Stack gap="sm">
      <Heading level={3}>Notes</Heading>
      {notes.map((note) => (
        <MeetingNoteItem key={note.id} note={note} onChanged={onChanged} />
      ))}
      <AddNoteForm meetingId={meetingId} onChanged={onChanged} />
    </Stack>
  )
}
