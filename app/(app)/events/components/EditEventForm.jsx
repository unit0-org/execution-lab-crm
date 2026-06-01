'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { EventFields } from './EventFields'
import { useEditEvent } from '../hooks/useEditEvent'

export function EditEventForm({ event, onSaved, onCancel }) {
  const { action } = useEditEvent(onSaved)

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={event.id} />
      <Stack gap="md">
        <Heading level={3}>Edit event</Heading>
        <EventFields event={event} />
        <Inline gap="sm">
          <SubmitButton tone="primary" size="sm">Save</SubmitButton>
          <Button size="sm" onClick={onCancel}>Cancel</Button>
        </Inline>
      </Stack>
    </Form>
  )
}
