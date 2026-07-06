'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
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
        <Inline gap="sm">
          <SubmitButton tone="primary" size="sm">Create</SubmitButton>
          <Button size="sm" onClick={onCancel}>Cancel</Button>
        </Inline>
      </Stack>
    </Form>
  )
}
