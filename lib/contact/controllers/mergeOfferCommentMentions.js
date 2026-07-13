import { OfferCommentMention } from '@/lib/offerGenerator/models'

// Move mentions pointing at the losers to the winner. A comment that tagged
// both a loser and the winner would collide on the unique key, so reassign
// via findOrCreate (dedupe) then drop the loser rows.
export async function mergeOfferCommentMentions(winnerId, loserIds, t) {
  const rows = await OfferCommentMention.findAll({
    where: { mentioned_contact_id: loserIds }, transaction: t
  })

  for (const row of rows)
    await OfferCommentMention.findOrCreate({
      where: {
        offer_comment_id: row.offer_comment_id, mentioned_contact_id: winnerId
      },
      transaction: t
    })

  await OfferCommentMention.destroy({
    where: { mentioned_contact_id: loserIds }, transaction: t
  })
}
