'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { removeOfferComment } from '@/lib/offerGenerator/controllers'

// Delete one of the caller's own comments.
export const removeOfferCommentAction = withMember((contactId, commentId) =>
  removeOfferComment(contactId, commentId))
