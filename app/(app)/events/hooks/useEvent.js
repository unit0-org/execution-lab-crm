'use client'

import { useState, useEffect, useRef } from 'react'
import { getEventAction } from '../actions/getEvent'

// Seeded with the server-loaded event; only refetches on refresh.
export function useEvent(id, initial) {
  const [event, setEvent] = useState(initial)
  const [n, setN] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    getEventAction(id).then(setEvent)
  }, [id, n])

  return { event, refresh: () => setN((x) => x + 1) }
}
