'use client'

import { useState, useEffect, useRef } from 'react'
import { contactAnswersAction } from '../actions/contactAnswers'

// Seeded with server-loaded nuggets; only refetches on reload.
export function useContactAnswers(contactId, initial) {
  const [nuggets, setNuggets] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    contactAnswersAction(contactId).then(setNuggets)
  }, [contactId, tick])

  return { nuggets, reload: () => setTick((n) => n + 1) }
}
