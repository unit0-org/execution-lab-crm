'use client'

import { useState, useEffect } from 'react'
import { contactAnswersAction } from '../actions/contactAnswers'

export function useContactAnswers(contactId) {
  const [nuggets, setNuggets] = useState(undefined)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    contactAnswersAction(contactId).then(setNuggets)
  }, [contactId, tick])

  return { nuggets, reload: () => setTick((n) => n + 1) }
}
