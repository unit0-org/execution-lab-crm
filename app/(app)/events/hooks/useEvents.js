'use client'

import { useState, useEffect } from 'react'
import { listEventsAction } from '../actions/listEvents'

export function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    listEventsAction().then((rows) => {
      setEvents(rows)
      setLoading(false)
    })
  }, [tick])

  return { events, loading, reload: () => setTick((n) => n + 1) }
}
