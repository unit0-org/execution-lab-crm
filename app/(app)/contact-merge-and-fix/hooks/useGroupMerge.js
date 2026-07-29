'use client'

import { useState } from 'react'
import { mergeContactsAction }
  from '@/app/(app)/contacts/actions/mergeContacts'
import { showToast } from '@/ui/molecules/toastBus'
import { loserIds } from '@/app/(app)/contacts/hooks/planMerge'
import { groupKey } from './groupKey'
import { failIfError } from './failIfError'

const reportFailure = (error) => showToast(`Merge failed — ${error.message}`)

// A suggested group merges through the shared review modal (same operation
// as manual merge); on success its card leaves the surface. A merge that
// fails says so and leaves the card where it is — a spinner that stops with
// nothing said and nothing changed reads as a dead click.
export function useGroupMerge(group, onMerged) {
  const [review, setReview] = useState(null)

  const confirm = (winnerId) =>
    mergeContactsAction(winnerId, loserIds(review, winnerId))
      .then(failIfError)
      .then(() => onMerged(groupKey(group)), reportFailure)

  return {
    review,
    start: () => setReview(group.contacts),
    confirm,
    cancel: () => setReview(null)
  }
}
