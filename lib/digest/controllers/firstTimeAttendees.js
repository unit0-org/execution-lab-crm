import { eventSignals } from '@/lib/dashboard/controllers/eventSignals'
import { sevenDaysAgo } from './recentWindow'
import { firstCheckinEvents } from './firstCheckinEvents'

// Contacts whose first-ever event check-in landed in the last 7 days, each
// with the event they first attended.
export async function firstTimeAttendees() {
  const cutoff = sevenDaysAgo()
  const rows = await eventSignals()
  const recent = rows.filter((r) => r.first && new Date(r.first) >= cutoff)

  return firstCheckinEvents(recent.map((r) => r.contact_id))
}
