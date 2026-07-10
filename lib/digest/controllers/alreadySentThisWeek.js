import { isoDate } from '@/lib/portal/isoDate'
import { weekStartIso } from './weekTiming'

// Whether the digest already went out this week — its last send falls on or
// after this week's Monday (both compared as business-tz calendar dates).
export function alreadySentThisWeek(lastSentAt, iso) {
  if (!lastSentAt) return false

  return isoDate(lastSentAt) >= weekStartIso(iso)
}
