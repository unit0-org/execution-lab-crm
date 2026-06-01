'use client'

import { Form } from '@/ui/molecules/Form'
import { TextField } from '@/ui/atoms/TextField'
import { Select } from '@/ui/atoms/Select'
import { SubmitButton } from '@/ui/atoms/SubmitButton'
import { Stack } from '@/ui/layout/Stack'
import { useConfirmEvent } from '../hooks/useConfirmEvent'

const TYPES = ['online', 'in-person']

export function ConfirmEventForm({ result }) {
  const { action } = useConfirmEvent()

  return (
    <Form action={action}>
      <input type="hidden" name="id" value={result.eventId} />
      <Stack gap="md">
        <TextField label="Event name" name="title"
          defaultValue={result.eventTitle} />
        <TextField label="Date" name="date" type="date" />
        <Select label="Type" name="type" options={TYPES} />
        <SubmitButton tone="primary">Save event</SubmitButton>
      </Stack>
    </Form>
  )
}
