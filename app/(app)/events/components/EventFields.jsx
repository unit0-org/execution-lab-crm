import { TextField } from '@/ui/atoms/TextField'
import { Select } from '@/ui/atoms/Select'
import { Stack } from '@/ui/layout/Stack'

const TYPES = ['online', 'in-person']

const dateInputValue = (value) =>
  value ? new Date(value).toISOString().slice(0, 10) : ''

export function EventFields({ event }) {
  const date = dateInputValue(event.date)
  const type = event.type || TYPES[0]

  return (
    <Stack gap="sm">
      <TextField label="Event name" name="title"
        defaultValue={event.title} />
      <TextField label="Date" name="date" type="date" defaultValue={date} />
      <Select label="Type" name="type" options={TYPES} defaultValue={type} />
      <TextField label="URL" name="url" defaultValue={event.url} />
    </Stack>
  )
}
