import { sequelize } from '@/lib/db/sequelize'
import { meetingContactIds } from './meetingContactIds'
import { upsertMeetingBySource } from './upsertMeetingBySource'

// Op2 standalone: upsert a meeting by sourceDriveId (the given contactIds /
// emails feed the ±2h calendar-sync bridge). Returns
// { id, created, matchedBy }.
export function upsertMeetingOp(input) {
  return sequelize.transaction(async (t) => {
    const ids = await meetingContactIds(input, t)

    return upsertMeetingBySource(input, ids, t)
  })
}
