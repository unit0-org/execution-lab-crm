'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactNotes } from '../hooks/useContactNotes'
import { NotesHeader } from './NotesHeader'
import { AddNoteModal } from './AddNoteModal'
import { NotesBody } from './NotesBody'

export function ContactNotes({ contactId, initial, reveal }) {
  const { notes, reload } = useContactNotes(contactId, initial)

  const saved = () => {
    reload()
    reveal.hide()
  }

  return (
    <Stack gap="sm">
      <NotesHeader onAdd={reveal.show} />
      <AddNoteModal open={reveal.shown} contactId={contactId}
        onSaved={saved} onClose={reveal.hide} />
      <NotesBody notes={notes} onChanged={reload} />
    </Stack>
  )
}
