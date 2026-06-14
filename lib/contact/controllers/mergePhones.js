import { ContactPhone } from '@/lib/contact/models'

// Move loser phones to the winner, dropping numbers already on file
// (the table is unique per contact + phone).
export async function mergePhones(winnerId, loserIds, t) {
  const rows = await ContactPhone.findAll({
    where: { contact_id: [winnerId, ...loserIds] }, transaction: t
  })
  const seen = new Set()

  for (const row of rows) {
    if (seen.has(row.phone)) {
      await row.destroy({ transaction: t })
      continue
    }

    seen.add(row.phone)

    if (row.contact_id === winnerId) continue

    await row.update({ contact_id: winnerId }, { transaction: t })
  }
}
