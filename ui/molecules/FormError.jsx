import { Text } from '../atoms/Text'

/** Form-level error message; renders nothing when there is none. */
export function FormError({ message }) {
  if (!message) return null

  return <Text tone="danger" size="sm">{message}</Text>
}
