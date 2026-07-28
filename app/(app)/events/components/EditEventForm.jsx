'use client'

import { Form } from '@/ui/molecules/Form'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { FormActions } from '@/ui/molecules/FormActions'
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
        <FormActions onCancel={onCancel} />
      </Stack>
    </Form>
  )
}
