'use client'

import { useState, useEffect, useRef } from 'react'
import { listEventsAction } from '../actions/listEvents'

export function useEvents(initialEvents) {
  const [events, setEvents] = useState(initialEvents)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listEventsAction().then(setEvents)
  }, [tick])

  return { events, loading: false, reload: () => setTick((n) => n + 1) }
}
