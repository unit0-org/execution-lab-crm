'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Inline } from '@/ui/layout/Inline'
import { Avatar } from '@/ui/atoms/Avatar'
import { Text } from '@/ui/atoms/Text'
import { timeAgo } from '@/ui/atoms/timeAgo'
import { NoteTools } from './NoteTools'
import { withOwnNote } from './withOwnNote'
import { noteAuthorName } from './noteAuthorName'

const OwnNoteTools = withOwnNote(NoteTools)

// A comment's meta row: who wrote it and how long ago, with the edit/delete
// tools revealed on hover — but only on the viewer's own notes.
export function NoteHeader({ note, onChanged }) {
  const name = noteAuthorName(note)

  return (
    <GrowRow align="center">
      <Inline gap="sm">
        <Avatar name={name} size={24} />
        <Text size="sm" gutter="none">{name}</Text>
        <Text size="sm" tone="muted" gutter="none">{timeAgo(note.date)}</Text>
      </Inline>
      <OwnNoteTools mine={note.mine} note={note} onChanged={onChanged} />
    </GrowRow>
  )
}
