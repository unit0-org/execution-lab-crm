'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeParticipantAction } from '../actions/removeParticipant'

export function RemoveParticipant({ id, onChanged }) {
  const remove = useActionHandler(removeParticipantAction, {
    onDone: onChanged
  })

  return (
    <RowDelete onConfirm={() => remove(id)} title="Remove participant" />
  )
}
