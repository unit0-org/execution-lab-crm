import { MeetingAttachment } from '../models'

// Move the loser's attachments onto the winner, dropping any URL
// already attached (the table is unique per meeting + url).
export async function mergeMeetingAttachments(winnerId, loserId, t) {
  const rows = await MeetingAttachment.findAll({
    where: { meeting_id: [winnerId, loserId] }, transaction: t
  })
  const onWinner = new Set(
    rows.filter((r) => r.meeting_id === winnerId).map((r) => r.url)
  )

  for (const row of rows) {
    if (row.meeting_id === winnerId) continue

    if (onWinner.has(row.url)) {
      await row.destroy({ transaction: t })
      continue
    }

    await row.update({ meeting_id: winnerId }, { transaction: t })
  }
}
