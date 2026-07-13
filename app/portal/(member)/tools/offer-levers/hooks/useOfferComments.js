'use client'

import { useState, useEffect, useRef } from 'react'
import { listOfferCommentsAction } from '../actions/listOfferComments'

// Seeded with server-loaded comments; refetches only on reload.
export function useOfferComments(offerId, initial) {
  const [comments, setComments] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listOfferCommentsAction(offerId)
      .then((rows) => setComments(Array.isArray(rows) ? rows : []))
  }, [offerId, tick])

  return { comments, reload: () => setTick((n) => n + 1) }
}
