'use client'

import { useState } from 'react'
import { mergeContactsAction } from '../actions/mergeContacts'
import { planMerge, loserIds } from './planMerge'

export function useMergeFlow(onDone) {
  const [review, setReview] = useState(null)

  const run = (winnerId, contacts) =>
    mergeContactsAction(winnerId, loserIds(contacts, winnerId))
      .then(() => { setReview(null); onDone() })

  const start = (contacts) => {
    const plan = planMerge(contacts)

    if (plan.winnerId) return run(plan.winnerId, contacts)

    setReview(contacts)
  }

  return {
    review, start,
    confirm: (winnerId) => run(winnerId, review),
    cancel: () => setReview(null)
  }
}
