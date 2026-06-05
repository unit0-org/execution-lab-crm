import { Text } from '@/ui/atoms/Text'
import { ExternalLink } from '@/ui/atoms/ExternalLink'

// The contact's LinkedIn URL as a new-tab link, or a muted placeholder.
export function LinkedInSummary({ url }) {
  if (!url) return <Text size="sm" tone="muted">No LinkedIn yet</Text>

  return <ExternalLink href={url}>View profile</ExternalLink>
}
