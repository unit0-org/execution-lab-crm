import { Text } from '../atoms/Text'
import { Skeleton } from '../atoms/Skeleton'

// The signed-in user's email; a skeleton holds its place while it loads
// so the sidebar footer doesn't shift.
export function UserEmail({ value }) {
  if (!value) return <Skeleton height={14} />

  return <Text size="sm" tone="muted">{value}</Text>
}
