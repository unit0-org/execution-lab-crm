'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactNotes } from '../hooks/useContactNotes'
import { useReveal } from '../hooks/useReveal'
import { NotesHeader } from './NotesHeader'
import { AddNoteModal } from './AddNoteModal'
import { NoteList } from './NoteList'

export function ContactNotes({ contactId }) {
  const { notes, reload } = useContactNotes(contactId)
  const add = useReveal()
  const items = notes || []

  const saved = () => {
    reload()
    add.hide()
  }

  return (
    <Stack gap="sm">
      <NotesHeader onAdd={add.show} />
      <AddNoteModal open={add.shown} contactId={contactId}
        onSaved={saved} onClose={add.hide} />
      <NoteList notes={items} onChanged={reload} />
    </Stack>
  )
}
