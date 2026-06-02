'use client'

import { useState, useEffect } from 'react'
import { contactActivityAction } from '../actions/contactActivity'

export function useTimeline(contactId) {
  const [entries, setEntries] = useState(undefined)

  useEffect(() => {
    contactActivityAction(contactId).then(setEntries)
  }, [contactId])

  return entries
}
