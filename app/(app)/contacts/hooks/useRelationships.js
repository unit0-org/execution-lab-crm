'use client'

import { useState, useEffect, useRef } from 'react'
import { listRelationshipsAction } from '../actions/listRelationships'

// Seeded with server-loaded relationships; only refetches on reload.
export function useRelationships(contactId, initial) {
  const [relationships, setRelationships] = useState(initial)
  const [n, setN] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listRelationshipsAction(contactId).then(setRelationships)
  }, [contactId, n])

  return { relationships, reload: () => setN((x) => x + 1) }
}
