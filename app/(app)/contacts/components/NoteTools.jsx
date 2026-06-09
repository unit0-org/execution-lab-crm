'use client'

import { useReveal } from '../hooks/useReveal'
import { NoteButtons } from './NoteButtons'
import { EditNoteModal } from './EditNoteModal'
import { DeleteNoteModal } from './DeleteNoteModal'

export function NoteTools({ note, onChanged }) {
  const edit = useReveal()
  const remove = useReveal()

  return (
    <>
      <NoteButtons onEdit={edit.show} onDelete={remove.show} />
      <EditNoteModal open={edit.shown} note={note}
        onSaved={onChanged} onClose={edit.hide} />
      <DeleteNoteModal open={remove.shown} note={note}
        onDeleted={onChanged} onClose={remove.hide} />
    </>
  )
}
