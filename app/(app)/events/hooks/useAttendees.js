'use client'

import { useState, useEffect } from 'react'
import { listAttendeesAction } from '../actions/listAttendees'

export function useAttendees(id) {
  const [attendees, setAttendees] = useState(undefined)

  useEffect(() => {
    listAttendeesAction(id).then(setAttendees)
  }, [id])

  return attendees
}
