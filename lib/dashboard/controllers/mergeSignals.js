import { eventSignals } from './eventSignals'
import { meetingSignals } from './meetingSignals'
import { purchaseSignals } from './purchaseSignals'
import { collectRows } from './collectRows'
import { toSignal } from './toSignal'

// One merged signal row per contact across events, meetings, purchases.
export async function mergeSignals() {
  const [events, meetings, purchases] = await Promise.all([
    eventSignals(), meetingSignals(), purchaseSignals()
  ])
  const byId = new Map()

  collectRows(byId, events, 'events')
  collectRows(byId, meetings, 'meetings')
  collectRows(byId, purchases, 'purchases')

  return [...byId.values()].map(toSignal)
}
