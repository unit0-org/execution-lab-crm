import { TextField } from '@/ui/atoms/TextField'
import { Stack } from '@/ui/layout/Stack'
import { toDateInput } from '@/ui/atoms/toDateInput'

// Title + due date fields, shared by the add and edit task forms. Editing
// pre-fills from `task`; adding pre-fills the due date from `defaultDue`.
export function TaskFields({ task, defaultDue }) {
  const due = task ? toDateInput(task.dueAt) : defaultDue

  return (
    <Stack gap="sm">
      <TextField label="Title" name="title" required
        placeholder="Follow up on…" defaultValue={task?.title} />
      <TextField label="Due" name="due_at" type="date" defaultValue={due} />
    </Stack>
  )
}
