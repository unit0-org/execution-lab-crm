import { OfferComment } from '../models'

// Delete a comment — only if the caller authored it. A no-op otherwise (the
// author-scoped where matches nothing), so it never errors.
export async function removeOfferComment(contactId, commentId) {
  await OfferComment.destroyOwned(contactId, commentId)

  return { ok: true }
}
