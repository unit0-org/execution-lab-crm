import { Text } from '@/ui/atoms/Text'

// The task title, muted once the task is done.
export function TaskTitle({ task }) {
  const tone = task.done ? 'muted' : undefined

  return <Text tone={tone} gutter="none">{task.title}</Text>
}
