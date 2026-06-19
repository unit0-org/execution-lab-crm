import { Meeting } from '../models'
import { sameTitle, sameMinute } from './meetingMatch'

// An un-synced meeting that shares this event's title: same minute too
// = adopt and refresh from Google; same title alone = suggest a merge.
export async function findTitleMatch({ title, starts_at }) {
  const rows = await Meeting.findAll({ where: { google_event_id: null } })

  for (const row of rows) {
    if (!sameTitle(row.title, title)) continue

    if (sameMinute(row.starts_at, starts_at)) {
      return { kind: 'adopt', row, refresh: true }
    }

    return { kind: 'suggest', row }
  }

  return null
}
