'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeMemberAction } from '../actions/removeMember'

export function RemoveMember({ id, onChanged }) {
  const remove = useActionHandler(removeMemberAction, { onDone: onChanged })

  return <RowDelete onConfirm={() => remove(id)} title="Remove member" />
}
