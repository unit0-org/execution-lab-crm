import { OfferShare } from '@/lib/offerGenerator/models'
import { ownedOfferIds } from './ownedOfferIds'

// Fold offer shares into the winner: move each loser's shares to the winner
// (skipping offers the winner owns), drop the loser shares, then clear any
// self-share where the winner now owns the shared offer. Runs after the
// offers are reassigned (claimContactRecords), so ownership is settled.
export async function mergeOfferShares(winnerId, loserIds, t) {
  const owned = new Set(await ownedOfferIds(winnerId, t))
  const rows = await OfferShare.findAll({
    where: { contact_id: loserIds }, transaction: t
  })

  for (const row of rows)
    if (!owned.has(row.offer_id))
      await OfferShare.findOrCreate({
        where: { offer_id: row.offer_id, contact_id: winnerId },
        transaction: t
      })

  await OfferShare.destroy({ where: { contact_id: loserIds }, transaction: t })
  await OfferShare.destroy({
    where: { contact_id: winnerId, offer_id: [...owned] }, transaction: t
  })
}
