'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { FormActions } from '@/ui/molecules/FormActions'
import { FormError } from '@/ui/molecules/FormError'
import { MeetingFields } from './MeetingFields'
import { ExtraMeetingFields } from './ExtraMeetingFields'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'
import { createMeetingAction } from '../actions/createMeeting'

export function NewMeetingForm({ onCreated, onCancel }) {
  const { action, error } = useFormAction(createMeetingAction, onCreated)

  return (
    <Form action={action}>
      <Stack gap="md">
        <MeetingFields meeting={{}} />
        <ExtraMeetingFields />
        <FormError message={error} />
        <FormActions label="Create" onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
