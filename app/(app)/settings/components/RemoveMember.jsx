'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useRemoveMember } from '../hooks/useRemoveMember'

export function RemoveMember({ id, onChanged }) {
  const remove = useRemoveMember(id, onChanged)

  return <RowDelete onConfirm={remove} title="Remove member" />
}
