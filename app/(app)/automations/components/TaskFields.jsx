import { TextField } from '@/ui/atoms/TextField'

// Title + optional due offset for the "create a task" action.
export function TaskFields({ form }) {
  if (form.action !== 'create_task') return null

  return (
    <>
      <TextField label="Task title" name="title" />
      <TextField label="Due in (days)" name="dueInDays" type="number" />
    </>
  )
}
