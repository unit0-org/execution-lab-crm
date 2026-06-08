'use client'

import { useState, useEffect, useRef } from 'react'
import { listMeetingsAction } from '../actions/listMeetings'

export function useMeetings(initialMeetings) {
  const [meetings, setMeetings] = useState(initialMeetings)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listMeetingsAction().then(setMeetings)
  }, [tick])

  return { meetings, loading: false, reload: () => setTick((n) => n + 1) }
}
