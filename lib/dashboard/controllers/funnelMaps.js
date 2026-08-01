import { latestActivity } from './latestActivity'
import { meetingSignals } from './meetingSignals'
import { clientDates } from './clientDates'
import { indexLatest } from './indexLatest'

// The three per-contact lookups every attendee is scored against. All are
// unscoped by design: a touch counts wherever it happened, so long as it
// lands after the attendee's first check-in.
export async function funnelMaps() {
  const [latest, meetingRows, clients] = await Promise.all([
    latestActivity(), meetingSignals(), clientDates()
  ])
  const meetings = new Map()

  indexLatest(meetings, meetingRows)

  return { latest, meetings, clients }
}
