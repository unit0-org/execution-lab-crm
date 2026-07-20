'use client'

import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { NoteHeader } from './NoteHeader'

// One note, read as a comment: who wrote it and when, then the body.
// The id anchors the link an @-mention email sends the reader to.
export function NoteRow({ note, onChanged }) {
  return (
    <Stack gap="xs" hoverHost hoverBg id={`note-${note.id}`}>
      <NoteHeader note={note} onChanged={onChanged} />
      <Text gutter="none">{note.body}</Text>
    </Stack>
  )
}
