'use client'

import { removeOfferCommentAction } from '../actions/removeOfferComment'

// Delete a comment, then tell the thread to refresh.
export function useRemoveComment(onChanged) {
  return (id) => removeOfferCommentAction(id).then(onChanged)
}
