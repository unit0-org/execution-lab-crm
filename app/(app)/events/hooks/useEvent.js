'use client'

import { useState, useEffect } from 'react'
import { getEventAction } from '../actions/getEvent'

export function useEvent(id) {
  const [event, setEvent] = useState(undefined)
  const [n, setN] = useState(0)

  useEffect(() => {
    getEventAction(id).then(setEvent)
  }, [id, n])

  return { event, refresh: () => setN((x) => x + 1) }
}
