import { TextField } from '@/ui/atoms/TextField'
import { Select } from '@/ui/atoms/Select'
import { Stack } from '@/ui/layout/Stack'

const TYPES = ['online', 'in-person']

const dtLocal = (value) =>
  value ? new Date(value).toISOString().slice(0, 16) : ''

export function MeetingFields({ meeting }) {
  const starts = dtLocal(meeting.starts_at)
  const type = meeting.online ? 'online' : 'in-person'

  return (
    <Stack gap="sm">
      <TextField label="Title" name="title" defaultValue={meeting.title} />
      <TextField label="Date & time" name="starts_at"
        type="datetime-local" defaultValue={starts} />
      <Select label="Type" name="type" options={TYPES}
        defaultValue={type} />
    </Stack>
  )
}
