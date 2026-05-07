import { Text } from '@/ui/Text'

const today = () => new Date().toISOString().slice(0, 10)
const daysBetween = (a, b) => Math.round((new Date(a) - new Date(b)) / 86400_000)

function labelFor(due) {
  if (!due) return ''
  const delta = daysBetween(today(), due)
  if (delta > 0) return `${delta}d overdue`
  if (delta === 0) return 'due today'
  return ''
}

export function DueLabel({ due }) {
  return <Text tone="muted" size="sm">{labelFor(due)}</Text>
}
