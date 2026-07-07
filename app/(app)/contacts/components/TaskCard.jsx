'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { TaskTitle } from './TaskTitle'
import { TaskDue } from './TaskDue'

export function TaskCard({ task, onToggle }) {
  const change = (e) => onToggle(task.id, e.target.checked)

  return (
    <Card id={`task-${task.id}`}>
      <Stack gap="xs">
        <Inline gap="sm">
          <Checkbox checked={task.done} onChange={change} />
          <TaskTitle task={task} />
        </Inline>
        <TaskDue value={task.dueAt} />
      </Stack>
    </Card>
  )
}
