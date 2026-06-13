'use client'

import { useState, useEffect, useRef } from 'react'
import { listNotesAction } from '../actions/listNotes'

// Seeded with server-loaded notes; only refetches on reload.
export function useContactNotes(contactId, initial) {
  const [notes, setNotes] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listNotesAction(contactId).then(setNotes)
  }, [contactId, tick])

  return { notes, reload: () => setTick((n) => n + 1) }
}
