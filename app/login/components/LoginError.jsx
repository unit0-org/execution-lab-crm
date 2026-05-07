import { Text } from '@/ui/Text'

export function LoginError({ message }) {
  if (!message) return null

  return <Text tone="danger" size="sm">{message}</Text>
}
