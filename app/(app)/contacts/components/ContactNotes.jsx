'use client'

import { useRef, useState } from 'react'
import { Stack } from '@/ui/layout/Stack'
import { useContactNotes } from '../hooks/useContactNotes'
import { useFocusOnReveal } from '../hooks/useFocusOnReveal'
import { NotesHeader } from './NotesHeader'
import { NoteComposer } from './NoteComposer'
import { NotesBody } from './NotesBody'

export function ContactNotes({ contactId, initial, reveal }) {
  const { notes, reload } = useContactNotes(contactId, initial)
  const composerRef = useRef(null)
  const [key, setKey] = useState(0)
  useFocusOnReveal(reveal, composerRef)
  const saved = () => {
    reload()
    setKey((k) => k + 1)
  }

  return (
    <Stack gap="sm">
      <NotesHeader />
      <div ref={composerRef}>
        <NoteComposer key={key} contactId={contactId} onSaved={saved} />
      </div>
      <NotesBody notes={notes} onChanged={reload} />
    </Stack>
  )
}
