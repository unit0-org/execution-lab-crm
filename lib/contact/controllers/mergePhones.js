import { ContactPhone } from '@/lib/contact/models'

// The row to keep for a number: the winner's own if it has one, else the
// first loser row seen.
const keepPerPhone = (rows, winnerId) => {
  const kept = new Map()

  for (const row of rows) {
    const seen = kept.get(row.phone)

    if (!seen || row.contact_id === winnerId) kept.set(row.phone, row)
  }

  return kept
}

// Move loser phones to the winner, dropping numbers already on file (the
// table is unique per contact + phone). Every duplicate is destroyed before
// anything moves: a loser's row moving onto a number the winner still holds
// collides, and the order rows come back in is not ours to choose — two
// contacts sharing a phone is exactly what marked them duplicates.
export async function mergePhones(winnerId, loserIds, t) {
  const rows = await ContactPhone.findAll({
    where: { contact_id: [winnerId, ...loserIds] }, transaction: t
  })
  const kept = keepPerPhone(rows, winnerId)

  for (const row of rows)
    if (kept.get(row.phone) !== row) await row.destroy({ transaction: t })

  for (const row of kept.values())
    if (row.contact_id !== winnerId)
      await row.update({ contact_id: winnerId }, { transaction: t })
}
