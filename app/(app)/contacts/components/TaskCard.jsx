'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { GrowRow } from '@/ui/layout/GrowRow'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { TaskTitle } from './TaskTitle'
import { TaskDue } from './TaskDue'
import { TaskTools } from './TaskTools'

export function TaskCard({ task, onToggle, onChanged }) {
  const change = (e) => onToggle(task.id, e.target.checked)

  return (
    <Card id={`task-${task.id}`} hoverHost>
      <Stack gap="xs">
        <GrowRow align="center">
          <Inline gap="sm">
            <Checkbox checked={task.done} onChange={change} />
            <TaskTitle task={task} />
          </Inline>
          <TaskTools task={task} onChanged={onChanged} />
        </GrowRow>
        <TaskDue value={task.dueAt} />
      </Stack>
    </Card>
  )
}
