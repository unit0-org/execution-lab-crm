import { Text } from '@/ui/atoms/Text'

// The contact's emails as one comma-separated line (or a hint if none).
export function EmailSummary({ emails }) {
  const list = emails.map((e) => e.email).join(', ')
  const text = list || 'No emails yet'

  return <Text size="sm">{text}</Text>
}
