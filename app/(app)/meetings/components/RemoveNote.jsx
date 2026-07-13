'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeMeetingNoteAction } from '../actions/removeMeetingNote'

export function RemoveNote({ id, onChanged }) {
  const remove = useActionHandler(removeMeetingNoteAction, {
    onDone: onChanged
  })

  return <RowDelete onConfirm={() => remove(id)} title="Remove note" />
}
