'use client'

import { useState } from 'react'
import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { TaskFields } from './TaskFields'
import { FormError } from './FormError'
import { FormActions } from '@/ui/molecules/FormActions'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { todayIso } from '@/lib/portal/todayIso'
import { addTaskAction } from '../actions/addTask'

export function TaskForm(props) {
  const { contactId, heading, label = 'Add', onSaved, onCancel } = props
  const { action, error } = useFormAction(addTaskAction, onSaved)
  const [today] = useState(todayIso)

  return (
    <Form action={action}>
      <input type="hidden" name="contact_id" value={contactId} />
      <Stack gap="md">
        <Heading level={3}>{heading}</Heading>
        <TaskFields defaultDue={today} />
        <FormError message={error} />
        <FormActions label={label} onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
