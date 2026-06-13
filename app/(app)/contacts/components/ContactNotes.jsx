'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactNotes } from '../hooks/useContactNotes'
import { useReveal } from '../hooks/useReveal'
import { NotesHeader } from './NotesHeader'
import { AddNoteModal } from './AddNoteModal'
import { NotesBody } from './NotesBody'

export function ContactNotes({ contactId, initial }) {
  const { notes, reload } = useContactNotes(contactId, initial)
  const add = useReveal()

  const saved = () => {
    reload()
    add.hide()
  }

  return (
    <Stack gap="sm">
      <NotesHeader onAdd={add.show} />
      <AddNoteModal open={add.shown} contactId={contactId}
        onSaved={saved} onClose={add.hide} />
      <NotesBody notes={notes} onChanged={reload} />
    </Stack>
  )
}
