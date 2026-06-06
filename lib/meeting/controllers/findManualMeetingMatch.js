import { Meeting } from '../models'
import { sameTitle, sameMinute } from './meetingMatch'

// Find a hand-created meeting (no Google id yet) that looks like this
// event. Exact = same title and start; likely = same title, other time.
// A shared start minute alone is coincidence, not a duplicate signal.
export async function findManualMeetingMatch({ title, starts_at }) {
  const rows = await Meeting.findAll({ where: { google_event_id: null } })

  for (const row of rows) {
    const titled = sameTitle(row.title, title)
    const timed = sameMinute(row.starts_at, starts_at)

    if (titled && timed) return { exact: true, row }

    if (titled) return { likely: true, row }
  }

  return null
}
