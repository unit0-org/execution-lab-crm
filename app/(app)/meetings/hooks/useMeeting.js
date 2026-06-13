'use client'

import { useState, useEffect, useRef } from 'react'
import { getMeetingAction } from '../actions/getMeeting'

// Seeded with the server-loaded meeting; only refetches on refresh.
export function useMeeting(id, initial) {
  const [meeting, setMeeting] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    getMeetingAction(id).then(setMeeting)
  }, [id, tick])

  return { meeting, refresh: () => setTick((n) => n + 1) }
}
