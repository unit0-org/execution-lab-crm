'use client'

import { useReveal } from '../hooks/useReveal'
import { TaskButtons } from './TaskButtons'
import { EditTaskModal } from './EditTaskModal'
import { DeleteTaskModal } from './DeleteTaskModal'

// Per-task edit/delete controls: hover-revealed buttons plus their modals.
export function TaskTools({ task, onChanged }) {
  const edit = useReveal()
  const remove = useReveal()

  return (
    <>
      <TaskButtons onEdit={edit.show} onDelete={remove.show} />
      <EditTaskModal open={edit.shown} task={task}
        onSaved={onChanged} onClose={edit.hide} />
      <DeleteTaskModal open={remove.shown} task={task}
        onDeleted={onChanged} onClose={remove.hide} />
    </>
  )
}
