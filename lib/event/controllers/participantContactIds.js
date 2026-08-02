import { EventParticipant } from '../models'
import { participationWhere } from './participationWhere'

// The ids of contacts who took part in the chosen events with any of the
// chosen attendance statuses. Null when neither is chosen — the caller
// then leaves the contact list unfiltered.
//
// Deduped: one person can hold many participations (237 check-ins across
// 165 people), and the raw rows would carry each of them into the id list
// and on through intersectIds.
export async function participantContactIds(statuses, events) {
  const where = participationWhere(statuses, events)

  if (!where) return null

  const rows = await EventParticipant.findAll({
    attributes: ['contact_id'],
    where,
    raw: true
  })

  return [...new Set(rows.map((row) => row.contact_id).filter(Boolean))]
}
