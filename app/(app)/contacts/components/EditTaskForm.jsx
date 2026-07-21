'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { TaskFields } from './TaskFields'
import { FormError } from './FormError'
import { FormActions } from '@/ui/molecules/FormActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { updateTaskAction } from '../actions/updateTask'

export function EditTaskForm({ task, onSaved, onCancel }) {
  const { action, error } = useFormAction(updateTaskAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="task_id" value={task.id} />
      <Stack gap="md">
        <Heading level={3}>Edit task</Heading>
        <TaskFields task={task} />
        <FormError message={error} />
        <FormActions label="Save" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
