import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'

// The due date, or nothing when the task has none.
export function TaskDue({ value }) {
  if (!value) return null

  return <Text tone="muted" size="sm">Due <DateText value={value} /></Text>
}
