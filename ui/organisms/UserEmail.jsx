import { Text } from '../atoms/Text'

/**
 * Signed-in user email display. Passed in from the server, so it's there
 * on the first paint — no skeleton, no layout shift.
 */
export function UserEmail({ value }) {
  return <Text size="sm" tone="muted">{value}</Text>
}
