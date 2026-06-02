'use client'

import { useState, useEffect } from 'react'
import { listMeetingsAction } from '../actions/listMeetings'

export function useMeetings() {
  const [meetings, setMeetings] = useState([])
  const [loading, setLoading] = useState(true)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    listMeetingsAction().then((rows) => {
      setMeetings(rows)
      setLoading(false)
    })
  }, [tick])

  return { meetings, loading, reload: () => setTick((n) => n + 1) }
}
