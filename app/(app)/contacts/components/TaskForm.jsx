'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { TaskFields } from './TaskFields'
import { FormError } from './FormError'
import { DialogActions } from './DialogActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { addTaskAction } from '../actions/addTask'

export function TaskForm(props) {
  const { contactId, heading, label = 'Add', onSaved, onCancel } = props
  const { action, error } = useFormAction(addTaskAction, onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Stack gap="md">
        <Heading level={3}>{heading}</Heading>
        <TaskFields />
        <FormError message={error} />
        <DialogActions label={label} onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
