import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'
import { toDateInput } from '@/ui/atoms/toDateInput'

// Title + due date fields, shared by the add and edit task forms. Pass a
// `task` to pre-fill the fields when editing.
export function TaskFields({ task }) {
  return (
    <Stack gap="sm">
      <TextField label="Title" name="title" required
        placeholder="Follow up on…" defaultValue={task?.title} />
      <TextField label="Due" name="due_at" type="date"
        defaultValue={toDateInput(task?.dueAt)} />
    </Stack>
  )
}
