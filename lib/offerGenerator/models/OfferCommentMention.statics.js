// Helper for OfferCommentMention: record a comment's tags idempotently (the
// UNIQUE(offer_comment_id, mentioned_contact_id) makes re-recording a no-op).
export function addStatics(model) {
  model.recordFor = async function (commentId, contactIds) {
    for (const contactId of contactIds)
      await model.findOrCreate({
        where: {
          offer_comment_id: commentId, mentioned_contact_id: contactId
        }
      })
  }
}
