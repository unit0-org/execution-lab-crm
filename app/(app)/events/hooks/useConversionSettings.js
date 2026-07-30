'use client'

import { useState, useEffect, useRef } from 'react'
import { getConversionSettingsAction }
  from '../actions/getConversionSettings'

// Seeded with the server-loaded settings; only refetches on refresh.
export function useConversionSettings(eventId, initial) {
  const [settings, setSettings] = useState(initial)
  const [n, setN] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    getConversionSettingsAction(eventId).then(setSettings)
  }, [eventId, n])

  return { settings, refresh: () => setN((x) => x + 1) }
}
