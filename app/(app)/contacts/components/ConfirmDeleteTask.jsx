'use client'

import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { ConfirmDeleteForm } from './ConfirmDeleteForm'
import { deleteTaskAction } from '../actions/deleteTask'

export function ConfirmDeleteTask({ task, onDeleted, onCancel }) {
  const { action } = useFormAction(deleteTaskAction, onDeleted)

  return (
    <ConfirmDeleteForm heading="Delete task" action={action}
      id={task.id} onCancel={onCancel} />
  )
}
