import { EventParticipant } from '@/lib/event/models'
import { foldParticipant } from './foldParticipant'
import { claimParticipations } from './claimParticipations'

const pickSurvivor = (seen, row, winnerId) =>
  row.contact_id === winnerId ? row : seen

// One participation per (contact, event): keep a single row per event
// for the winner, folding duplicate participations into it.
export async function mergeParticipations(winnerId, loserIds, t) {
  const rows = await EventParticipant.findAll({
    where: { contact_id: [winnerId, ...loserIds] }, transaction: t
  })
  const kept = new Map()

  for (const row of rows) {
    const seen = kept.get(row.own_event_id)

    if (!seen) {
      kept.set(row.own_event_id, row)
      continue
    }

    const winner = pickSurvivor(seen, row, winnerId)

    await foldParticipant(winner, winner === seen ? row : seen, t)
    kept.set(row.own_event_id, winner)
  }
  await claimParticipations(kept, winnerId, t)
}
