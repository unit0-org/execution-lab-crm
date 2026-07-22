import { Text } from '@/ui/atoms/Text'

export function CompanyEmailCell({ email }) {
  if (!email) return <Text tone="muted">—</Text>

  return <Text>{email}</Text>
}
