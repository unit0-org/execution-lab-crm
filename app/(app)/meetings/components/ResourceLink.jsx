import { Inline } from '@/ui/layout/Inline'
import { Badge } from '@/ui/atoms/Badge'
import { ExternalLink } from '@/ui/atoms/ExternalLink'

const LABELS = {
  recording: 'Recording',
  transcript: 'Transcript',
  notes: 'Notes'
}

export function ResourceLink({ resource }) {
  return (
    <Inline gap="sm">
      <Badge tone="neutral">{LABELS[resource.kind]}</Badge>
      <ExternalLink href={resource.url}>{resource.title}</ExternalLink>
    </Inline>
  )
}
