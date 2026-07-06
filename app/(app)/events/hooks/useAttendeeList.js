'use client'

import { useState } from 'react'
import { useToggle } from '@/ui/molecules/useToggle'
import { useRowSelection } from '@/ui/molecules/useRowSelection'

// Client-side status filter over the loaded attendees, row selection over
// the visible rows, and the add modal's open state.
export function useAttendeeList(attendees) {
  const [activeStatus, setStatus] = useState('All')
  const modal = useToggle()
  const matches = (a) => activeStatus === 'All' || a.status === activeStatus
  const filtered = attendees.filter(matches)
  const selection = useRowSelection(filtered)
  const count = (status) =>
    status === 'All'
      ? attendees.length
      : attendees.filter((a) => a.status === status).length

  return { filtered, activeStatus, setStatus, modal, count, selection }
}
