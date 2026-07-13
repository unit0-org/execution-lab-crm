import { Text } from './Text'

/** Inline field error; renders nothing when there is no message. */
export function FieldError({ message }) {
  if (!message) return null

  return <Text tone="danger" size="sm">{message}</Text>
}
