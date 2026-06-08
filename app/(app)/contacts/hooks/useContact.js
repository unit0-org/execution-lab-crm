'use client'

import { useState, useEffect, useRef } from 'react'
import { getContactAction } from '../actions/getContact'

// Seeded with the server-loaded contact; only refetches on refresh.
export function useContact(id, initial) {
  const [contact, setContact] = useState(initial)
  const [n, setN] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    getContactAction(id).then(setContact)
  }, [id, n])

  return { contact, refresh: () => setN((x) => x + 1) }
}
