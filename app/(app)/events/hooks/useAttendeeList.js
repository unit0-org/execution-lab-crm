'use client'

import { useState } from 'react'
import { useToggle } from '@/ui/molecules/useToggle'

// Client-side status filter over the loaded attendees + the add modal's
// open state. Keeps AttendeeList presentational.
export function useAttendeeList(attendees) {
  const [activeStatus, setStatus] = useState('All')
  const modal = useToggle()
  const matches = (a) => activeStatus === 'All' || a.status === activeStatus
  const filtered = attendees.filter(matches)
  const count = (status) =>
    status === 'All'
      ? attendees.length
      : attendees.filter((a) => a.status === status).length

  return { filtered, activeStatus, setStatus, modal, count }
}
