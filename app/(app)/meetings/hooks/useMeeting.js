'use client'

import { useState, useEffect } from 'react'
import { getMeetingAction } from '../actions/getMeeting'

export function useMeeting(id) {
  const [meeting, setMeeting] = useState(undefined)

  useEffect(() => {
    getMeetingAction(id).then(setMeeting)
  }, [id])

  return meeting
}
