'use client'

import { useState, useEffect } from 'react'
import { getMeetingAction } from '../actions/getMeeting'

export function useMeeting(id) {
  const [meeting, setMeeting] = useState(undefined)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    getMeetingAction(id).then(setMeeting)
  }, [id, tick])

  return { meeting, refresh: () => setTick((n) => n + 1) }
}
