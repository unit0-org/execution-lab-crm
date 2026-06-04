import { Text } from '@/ui/atoms/Text'

// A lead's reason chips as a single muted inline note.
export function LeadReasons({ reasons }) {
  if (!reasons.length) return null

  return <Text tone="muted" size="sm">{reasons.join(' · ')}</Text>
}
