import { MeetingParticipant } from '../models'

// Move the loser's participants onto the winner, dropping any contact
// already attending (the table is unique per meeting + contact).
export async function mergeMeetingParticipants(winnerId, loserId, t) {
  const rows = await MeetingParticipant.findAll({
    where: { meeting_id: [winnerId, loserId] }, transaction: t
  })
  const onWinner = new Set(
    rows.filter((r) => r.meeting_id === winnerId).map((r) => r.contact_id)
  )

  for (const row of rows) {
    if (row.meeting_id === winnerId) continue

    if (onWinner.has(row.contact_id)) {
      await row.destroy({ transaction: t })
      continue
    }

    await row.update({ meeting_id: winnerId }, { transaction: t })
  }
}
