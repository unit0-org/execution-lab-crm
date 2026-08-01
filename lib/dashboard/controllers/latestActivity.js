import { eventSignals } from './eventSignals'
import { meetingSignals } from './meetingSignals'
import { purchaseActivity } from './purchaseActivity'
import { noteSignals } from './noteSignals'
import { emailSignals } from './emailSignals'
import { indexLatest } from './indexLatest'

// Contact → their most recent touch of any kind. This is the whole of the
// "nurturing" definition: a note, a meeting, an email, a purchase or
// another event check-in, dated after the one they first attended.
export async function latestActivity() {
  const groups = await Promise.all([
    eventSignals(), meetingSignals(), purchaseActivity(),
    noteSignals(), emailSignals()
  ])
  const latest = new Map()

  for (const rows of groups) indexLatest(latest, rows)

  return latest
}
