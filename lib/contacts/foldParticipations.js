import { claimParticipations } from './claimParticipations'

// Collapse a merge's per-group participation rows: keep one row per group
// (preferring the winner's, else the first seen), hand each duplicate to
// onDuplicate (fold answers, or just drop it), then point the survivors at
// the winner. Shared by the event + meeting participation merges.
export async function foldParticipations(opts, winnerId, loserIds, t) {
  const { model, groupKey, onDuplicate } = opts
  const rows = await model.findAll({
    where: { contact_id: [winnerId, ...loserIds] }, transaction: t
  })
  const kept = new Map()

  for (const row of rows) {
    const seen = kept.get(row[groupKey])

    if (!seen) {
      kept.set(row[groupKey], row)
      continue
    }

    const winner = seen.contact_id === winnerId ? seen : row
    await onDuplicate(winner, winner === seen ? row : seen, t)
    kept.set(row[groupKey], winner)
  }
  await claimParticipations(kept, winnerId, t)
}
