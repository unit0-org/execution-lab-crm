'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removeEmailAction } from '../actions/removeEmail'

export function RemoveEmail({ emailId, onChanged }) {
  const remove = useActionHandler(removeEmailAction, { onDone: onChanged })

  return <RowDelete onConfirm={() => remove(emailId)} title="Remove email" />
}
