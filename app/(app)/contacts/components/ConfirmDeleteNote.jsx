'use client'

import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { ConfirmDeleteForm } from './ConfirmDeleteForm'
import { removeNoteAction } from '../actions/removeNote'

export function ConfirmDeleteNote({ note, onDeleted, onCancel }) {
  const { action } = useFormAction(removeNoteAction, onDeleted)

  return (
    <ConfirmDeleteForm heading="Delete note" action={action}
      id={note.id} onCancel={onCancel} />
  )
}
