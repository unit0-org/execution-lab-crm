import { Text } from '@/ui/atoms/Text'

export function FormError({ message }) {
  if (!message) return null

  return <Text tone="danger" size="sm">{message}</Text>
}
