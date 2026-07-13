import { OfferComment } from '@/lib/offerGenerator/models'

// Reassign comments authored by the losers to the winner. Author is not
// unique per offer, so a straight move can't collide.
export async function mergeOfferComments(winnerId, loserIds, t) {
  await OfferComment.update(
    { author_contact_id: winnerId },
    { where: { author_contact_id: loserIds }, transaction: t }
  )
}
