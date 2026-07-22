import { Text } from '@/ui/atoms/Text'
import { ExternalLink } from '@/ui/atoms/ExternalLink'

export function CompanyWebsiteCell({ url }) {
  if (!url) return <Text tone="muted">—</Text>

  return <ExternalLink href={url}>{url}</ExternalLink>
}
