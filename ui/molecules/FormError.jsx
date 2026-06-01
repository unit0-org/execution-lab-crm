import { Text } from '../atoms/Text'

// Inline form error message; renders nothing when there's no message.
export function FormError({ message }) {
  if (!message) return null

  return <Text tone="danger" size="sm">{message}</Text>
}
