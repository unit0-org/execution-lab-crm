import { Badge } from '@/ui/atoms/Badge'
import { waitlistTone } from './waitlistTone'

// The entry's status as a toned badge.
export function WaitlistStatus({ status }) {
  return <Badge tone={waitlistTone(status)}>{status}</Badge>
}
