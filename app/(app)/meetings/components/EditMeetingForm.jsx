'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormActions } from '@/ui/molecules/FormActions'
import { MeetingFields } from './MeetingFields'
import { useEditMeeting } from '../hooks/useEditMeeting'

export function EditMeetingForm({ meeting, onSaved, onCancel }) {
  const { action } = useEditMeeting(onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={meeting.id} />
      <Stack gap="md">
        <Heading level={3}>Edit meeting</Heading>
        <MeetingFields meeting={meeting} />
        <FormActions onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
