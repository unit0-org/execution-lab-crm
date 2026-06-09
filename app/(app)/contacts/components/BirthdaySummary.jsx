import { Text } from '@/ui/atoms/Text'
import { formatBirthday } from './formatBirthday'

// The contact's birthday as text, or a muted placeholder.
export function BirthdaySummary({ day, month, year }) {
  const value = formatBirthday({ day, month, year })

  if (!value) return <Text size="sm" tone="muted">No birthday yet</Text>

  return <Text size="sm">{value}</Text>
}
