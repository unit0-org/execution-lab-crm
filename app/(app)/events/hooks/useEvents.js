'use client'

import { useState, useEffect } from 'react'
import { listEventsAction } from '../actions/listEvents'

export function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listEventsAction().then((rows) => {
      setEvents(rows)
      setLoading(false)
    })
  }, [])

  return { events, loading }
}
