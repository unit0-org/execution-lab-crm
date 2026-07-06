'use client'

import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { ConfirmDeleteForm } from './ConfirmDeleteForm'
import { removeNuggetAction } from '../actions/removeNugget'

export function ConfirmDeleteNugget({ nugget, onDeleted, onCancel }) {
  const { action } = useFormAction(removeNuggetAction, onDeleted)

  return (
    <ConfirmDeleteForm heading="Delete nugget" action={action}
      id={nugget.id} onCancel={onCancel} />
  )
}
