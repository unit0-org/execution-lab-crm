'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeRelationshipAction } from '../actions/removeRelationship'

export function RemoveRelationship({ id, onChanged }) {
  const remove = useActionHandler(removeRelationshipAction, {
    onDone: onChanged
  })

  return (
    <RowDelete onConfirm={() => remove(id)} title="Remove relationship" />
  )
}
