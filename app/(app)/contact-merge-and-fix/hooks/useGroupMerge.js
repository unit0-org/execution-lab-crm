'use client'

import { useState } from 'react'
import { mergeContactsAction }
  from '@/app/(app)/contacts/actions/mergeContacts'
import { loserIds } from '@/app/(app)/contacts/hooks/planMerge'
import { groupKey } from './groupKey'

// A suggested group merges through the shared review modal (same operation
// as manual merge); on success its card leaves the surface.
export function useGroupMerge(group, onMerged) {
  const [review, setReview] = useState(null)

  const confirm = (winnerId) =>
    mergeContactsAction(winnerId, loserIds(review, winnerId))
      .then(() => onMerged(groupKey(group)))

  return {
    review,
    start: () => setReview(group.contacts),
    confirm,
    cancel: () => setReview(null)
  }
}
