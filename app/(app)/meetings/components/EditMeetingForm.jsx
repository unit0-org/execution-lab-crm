'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
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
        <Inline gap="sm">
          <SubmitButton tone="primary" size="sm">Save</SubmitButton>
          <Button size="sm" onClick={onCancel}>Cancel</Button>
        </Inline>
      </Stack>
    </Form>
  )
}
