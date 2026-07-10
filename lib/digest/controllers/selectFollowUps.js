import { daysAgo } from '@/lib/dashboard/controllers/daysAgo'
import { STALE_DAYS, MAX_FOLLOW_UPS } from './followUpPolicy'
import { toFollowUp } from './toFollowUp'
import { compareFollowUps } from './compareFollowUps'

// Filter contacts to the stale / never-contacted set, sort, and cap it —
// returning the capped list plus how many more qualified beyond the cap.
export function selectFollowUps(contacts, activity) {
  const cutoff = daysAgo(STALE_DAYS)
  const ranked = contacts
    .map((c) => toFollowUp(c, activity.get(c.id)))
    .filter((f) => f.neverContacted || f.lastActivity < cutoff)
    .sort(compareFollowUps)

  return {
    items: ranked.slice(0, MAX_FOLLOW_UPS),
    overflow: Math.max(0, ranked.length - MAX_FOLLOW_UPS)
  }
}
