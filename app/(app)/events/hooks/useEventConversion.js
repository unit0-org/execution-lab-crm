'use client'

import { useState, useEffect, useRef } from 'react'
import { getEventConversionAction } from '../actions/getEventConversion'

// Seeded with the server-loaded settings; only refetches on refresh.
export function useEventConversion(eventId, initial) {
  const [conversion, setConversion] = useState(initial)
  const [n, setN] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    getEventConversionAction(eventId).then(setConversion)
  }, [eventId, n])

  return { conversion, refresh: () => setN((x) => x + 1) }
}
