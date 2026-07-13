// Record a comment's tags idempotently — the unique key
// (offer_comment_id, mentioned_contact_id) makes re-recording a no-op.
export async function recordFor(commentId, contactIds) {
  for (const contactId of contactIds)
    await this.findOrCreate({
      where: {
        offer_comment_id: commentId, mentioned_contact_id: contactId
      }
    })
}
