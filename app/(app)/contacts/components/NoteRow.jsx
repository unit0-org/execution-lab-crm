'use client'

import { Stack } from '@/ui/layout/Stack'
import { GrowRow } from '@/ui/layout/GrowRow'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { NoteTools } from './NoteTools'

// One note, read as a comment: the body, then its date beside the tools.
// The id anchors the link an @-mention email sends the reader to.
export function NoteRow({ note, onChanged }) {
  return (
    <Stack gap="xs" hoverHost id={`note-${note.id}`}>
      <Text gutter="none">{note.body}</Text>
      <GrowRow align="center">
        <Text size="sm" tone="muted" gutter="none">
          <DateText value={note.date} withTime />
        </Text>
        <NoteTools note={note} onChanged={onChanged} />
      </GrowRow>
    </Stack>
  )
}
