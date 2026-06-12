import { Badge } from '@/ui/atoms/Badge'
import { DateText } from '@/ui/atoms/DateText'

export function SentCell({ sentAt }) {
  if (!sentAt) return <Badge tone="neutral">Not sent</Badge>

  return <DateText value={sentAt} />
}
