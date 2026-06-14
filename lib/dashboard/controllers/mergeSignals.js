import { eventSignals } from './eventSignals'
import { meetingSignals } from './meetingSignals'
import { purchaseSignals } from './purchaseSignals'
import { excludedLeadIds } from './excludedLeadIds'
import { collectRows } from './collectRows'
import { toSignal } from './toSignal'

// One merged signal row per contact across events, meetings and
// purchases, excluding contacts in non-lead categories.
export async function mergeSignals() {
  const [events, meetings, purchases, excluded] = await Promise.all([
    eventSignals(),
    meetingSignals(),
    purchaseSignals(),
    excludedLeadIds()
  ])
  const byId = new Map()

  collectRows(byId, events, 'events')
  collectRows(byId, meetings, 'meetings')
  collectRows(byId, purchases, 'purchases')

  return [...byId.values()]
    .map(toSignal)
    .filter((s) => !excluded.has(s.contactId))
}
