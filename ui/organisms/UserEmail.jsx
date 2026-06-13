import { Text } from '../atoms/Text'
import { Skeleton } from '../atoms/Skeleton'

// The signed-in user's email; a skeleton holds its place while it loads
// so the sidebar footer doesn't shift. Its height matches the email's
// line box (14px sm text x 1.5 line-height) to avoid layout shift.
export function UserEmail({ value }) {
  if (!value) return <Skeleton height={21} />

  return <Text size="sm" tone="muted">{value}</Text>
}
