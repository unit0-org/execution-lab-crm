import { TextField } from '@/ui/atoms/TextField'
import { MentionField } from '@/ui/molecules/MentionField'
import { Stack } from '@/ui/layout/Stack'
import { toDateTimeInput } from '../hooks/toDateTimeInput'

export function NoteFields({ body, notedAt, options = [] }) {
  const v = body || ''

  return (
    <Stack gap="sm">
      <TextField label="Date & time" name="noted_at"
        type="datetime-local" defaultValue={toDateTimeInput(notedAt)} />
      <MentionField label="Note" name="body" idsName="mention_user_ids"
        defaultValue={v} options={options} rows={4} required
        placeholder="Write a note — type @ to tag a teammate" />
    </Stack>
  )
}
