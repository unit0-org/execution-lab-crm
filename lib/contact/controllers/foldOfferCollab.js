import { mergeOfferShares } from './mergeOfferShares'
import { mergeOfferComments } from './mergeOfferComments'
import { mergeOfferCommentMentions } from './mergeOfferCommentMentions'

// Fold every offer-collaboration table (shares, comments, comment mentions)
// into the winner. Runs after claimContactRecords reassigns the offers, so
// mergeOfferShares can collapse self-shares against settled ownership.
export async function foldOfferCollab(winnerId, loserIds, t) {
  await mergeOfferShares(winnerId, loserIds, t)
  await mergeOfferComments(winnerId, loserIds, t)
  await mergeOfferCommentMentions(winnerId, loserIds, t)
}
