'use client'

import { useState, useEffect, useRef } from 'react'
import { listEventsAction } from '../actions/listEvents'

// The events list, reloaded on demand with the filter the page is on, so
// a row change never silently drops the list back to every event.
export function useEvents(initialEvents, filter) {
  const [events, setEvents] = useState(initialEvents)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listEventsAction(filter).then(setEvents)
  }, [tick, filter])

  return { events, loading: false, reload: () => setTick((n) => n + 1) }
}
