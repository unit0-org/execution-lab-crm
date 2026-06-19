'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { NoteHead } from './NoteHead'

export function NoteCard({ note, onChanged }) {
  return (
    <Card hoverHost id={`note-${note.id}`}>
      <Stack gap="xs">
        <NoteHead note={note} onChanged={onChanged}>
          <Text gutter="none">{note.body}</Text>
        </NoteHead>
        <DateText value={note.date} withTime />
      </Stack>
    </Card>
  )
}
