import { Text } from '../atoms/Text'

// The signed-in user's email. Loaded on the server and passed in, so it's
// present on the first paint — no skeleton, no layout shift.
export function UserEmail({ value }) {
  return <Text size="sm" tone="muted">{value}</Text>
}
