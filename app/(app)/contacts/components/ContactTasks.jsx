'use client'

import { Stack } from '@/ui/layout/Stack'
import { useContactTasks } from '../hooks/useContactTasks'
import { TasksHeader } from './TasksHeader'
import { AddTaskModal } from './AddTaskModal'
import { TasksBody } from './TasksBody'

export function ContactTasks({ contactId, initial, reveal }) {
  const { tasks, reload, toggle } = useContactTasks(contactId, initial)

  const saved = () => {
    reload()
    reveal.hide()
  }

  return (
    <Stack gap="sm">
      <TasksHeader onAdd={reveal.show} />
      <AddTaskModal open={reveal.shown} contactId={contactId}
        onSaved={saved} onClose={reveal.hide} />
      <TasksBody tasks={tasks} onToggle={toggle} />
    </Stack>
  )
}
