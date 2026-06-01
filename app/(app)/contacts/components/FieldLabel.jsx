import { Text } from '@/ui/atoms/Text'

export function FieldLabel({ label }) {
  if (!label) return null

  return <Text size="sm" tone="muted">{label}</Text>
}
