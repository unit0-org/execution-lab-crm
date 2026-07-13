import { Text } from '../atoms/Text'
import { Link } from '../atoms/Link'

// The signed-in user's email. Loaded on the server and passed in, so it's
// present on the first paint — no skeleton, no layout shift. When an href
// is given the email links there (the footer points it at /preferences).
export function UserEmail({ value, href }) {
  const label = <Text size="sm" tone="muted">{value}</Text>

  if (!href) return label

  return <Link href={href}>{label}</Link>
}
