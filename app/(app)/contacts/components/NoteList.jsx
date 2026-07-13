import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { NoteEntry } from './NoteEntry'

// The notes thread: one inline row per note, newest first.
export function NoteList({ notes, onChanged }) {
  if (!notes.length) return <Text tone="muted">No notes yet.</Text>

  return (
    <Stack gap="sm">
      {notes.map((note, index) => (
        <NoteEntry key={note.id} note={note} index={index}
          onChanged={onChanged} />
      ))}
    </Stack>
  )
}
