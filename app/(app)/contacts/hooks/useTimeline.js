'use client'

import { useState, useEffect } from 'react'
import { contactTimelineAction } from '../actions/contactTimeline'

export function useTimeline(contactId) {
  const [entries, setEntries] = useState(undefined)

  useEffect(() => {
    contactTimelineAction(contactId).then(setEntries)
  }, [contactId])

  return entries
}
