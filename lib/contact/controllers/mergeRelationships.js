import { ContactRelationship } from '@/lib/contact/models'

// Move the loser's relationships to the winner on both ends, then drop any
// that collapsed into a self-reference (winner related to itself).
export async function mergeRelationships(winnerId, loserIds, t) {
  await ContactRelationship.update(
    { from_contact_id: winnerId },
    { where: { from_contact_id: loserIds }, transaction: t }
  )
  await ContactRelationship.update(
    { to_contact_id: winnerId },
    { where: { to_contact_id: loserIds }, transaction: t }
  )

  await ContactRelationship.destroy({
    where: { from_contact_id: winnerId, to_contact_id: winnerId },
    transaction: t
  })
}
