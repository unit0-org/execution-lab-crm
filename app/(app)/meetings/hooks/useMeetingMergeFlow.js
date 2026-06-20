'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { mergeMeetingsAction } from '../actions/mergeMeetings'

const loserIds = (meetings, winnerId) =>
  meetings.filter((m) => m.id !== winnerId).map((m) => m.id)

export function useMeetingMergeFlow(onDone) {
  const [review, setReview] = useState(null)

  const run = (winnerId) =>
    mergeMeetingsAction(winnerId, loserIds(review, winnerId))
      .then(() => {
        setReview(null)
        showToast('Meetings merged')
        onDone()
      })

  return {
    review,
    start: setReview,
    confirm: run,
    cancel: () => setReview(null)
  }
}
