'use client'

import { useState } from 'react'
import { mergeContactsAction } from '../actions/mergeContacts'
import { loserIds } from './planMerge'

// A merge permanently deletes every contact that isn't kept, so it always
// goes through the review modal — there is no straight-to-merge path.
export function useMergeFlow(onDone) {
  const [review, setReview] = useState(null)

  const run = (winnerId) =>
    mergeContactsAction(winnerId, loserIds(review, winnerId))
      .then(() => { setReview(null); onDone() })

  return {
    review,
    start: (contacts) => setReview(contacts),
    confirm: run,
    cancel: () => setReview(null)
  }
}
