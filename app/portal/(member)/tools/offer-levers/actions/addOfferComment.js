'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { addOfferComment } from '@/lib/offerGenerator/controllers'
import { parseMentionContactIds } from '../parseMentionContactIds'

// Post a comment on an offer's thread, tagging the picked members.
export const addOfferCommentAction = withMember((contactId, formData) =>
  addOfferComment(
    contactId, formData.get('offer_id'), formData.get('body'),
    parseMentionContactIds(formData)
  ))
