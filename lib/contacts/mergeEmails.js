import { ContactEmail } from '@/lib/db/models'

// Email is globally unique, so every loser email can move as-is.
export async function mergeEmails(winnerId, loserIds, t) {
  await ContactEmail.update(
    { contact_id: winnerId },
    { where: { contact_id: loserIds }, transaction: t }
  )
}
