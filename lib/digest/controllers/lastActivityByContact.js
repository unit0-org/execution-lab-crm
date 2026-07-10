import { eventSignals } from '@/lib/dashboard/controllers/eventSignals'
import { meetingSignals } from '@/lib/dashboard/controllers/meetingSignals'
import { purchaseSignals } from '@/lib/dashboard/controllers/purchaseSignals'
import { collectRows } from '@/lib/dashboard/controllers/collectRows'
import { toSignal } from '@/lib/dashboard/controllers/toSignal'

// Map of contact id → last activity Date across events, meetings and
// purchases. Unlike mergeSignals it keeps every contact (no lead filter),
// so the follow-up scan also sees customers and non-lead contacts.
export async function lastActivityByContact() {
  const [events, meetings, purchases] = await Promise.all([
    eventSignals(),
    meetingSignals(),
    purchaseSignals()
  ])
  const byId = new Map()

  collectRows(byId, events, 'events')
  collectRows(byId, meetings, 'meetings')
  collectRows(byId, purchases, 'purchases')

  return new Map(
    [...byId.values()].map(toSignal).map((s) => [s.contactId, s.lastActivity])
  )
}
