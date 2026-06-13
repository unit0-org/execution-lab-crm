import { MeetingParticipant } from '@/lib/meeting/models'

const keep = (seen, row, winnerId) =>
  seen.contact_id === winnerId ? seen : row

// One participation per (meeting, contact): drop duplicate meeting rows
// (preferring the winner's), then point the survivors at the winner.
export async function mergeMeetingParticipations(winnerId, loserIds, t) {
  const rows = await MeetingParticipant.findAll({
    where: { contact_id: [winnerId, ...loserIds] }, transaction: t
  })
  const kept = new Map()

  for (const row of rows) {
    const seen = kept.get(row.meeting_id)

    if (!seen) {
      kept.set(row.meeting_id, row)
      continue
    }

    const winner = keep(seen, row, winnerId)
    await (winner === seen ? row : seen).destroy({ transaction: t })
    kept.set(row.meeting_id, winner)
  }

  for (const row of kept.values())
    if (row.contact_id !== winnerId)
      await row.update({ contact_id: winnerId }, { transaction: t })
}
