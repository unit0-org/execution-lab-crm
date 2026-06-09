'use client'

import { useState, useEffect } from 'react'
import { listNotesAction } from '../actions/listNotes'

export function useContactNotes(contactId) {
  const [notes, setNotes] = useState(undefined)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    listNotesAction(contactId).then(setNotes)
  }, [contactId, tick])

  return { notes, reload: () => setTick((n) => n + 1) }
}
