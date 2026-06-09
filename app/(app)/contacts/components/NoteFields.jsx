import { TextField } from '@/ui/atoms/TextField'
import { TextArea } from '@/ui/atoms/TextArea'
import { Stack } from '@/ui/layout/Stack'
import { toDateTimeInput } from '../hooks/toDateTimeInput'

export function NoteFields({ body, notedAt }) {
  const v = body || ''

  return (
    <Stack gap="sm">
      <TextField label="Date & time" name="noted_at"
        type="datetime-local" defaultValue={toDateTimeInput(notedAt)} />
      <TextArea label="Note" name="body" autoFocus defaultValue={v}
        placeholder="Write a note" required />
    </Stack>
  )
}
