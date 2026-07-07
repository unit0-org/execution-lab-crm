import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'

export function TaskFields() {
  return (
    <Stack gap="sm">
      <TextField label="Title" name="title" required
        placeholder="Follow up on…" />
      <TextField label="Due" name="due_at" type="date" />
    </Stack>
  )
}
