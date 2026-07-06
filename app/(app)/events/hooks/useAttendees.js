'use client'

import { useState, useEffect, useRef } from 'react'
import { listAttendeesAction } from '../actions/listAttendees'

// Seeded with the server-loaded attendees; refetches on refresh so
// add/remove reflect without a page reload.
export function useAttendees(id, initial) {
  const [attendees, setAttendees] = useState(initial || [])
  const [n, setN] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listAttendeesAction(id).then(setAttendees)
  }, [id, n])

  return { attendees, refresh: () => setN((x) => x + 1) }
}
