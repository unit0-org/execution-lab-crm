'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { removePhoneAction } from '../actions/removePhone'

export function RemovePhone({ phoneId, onChanged }) {
  const remove = useActionHandler(removePhoneAction, { onDone: onChanged })

  return <RowDelete onConfirm={() => remove(phoneId)} title="Remove phone" />
}
