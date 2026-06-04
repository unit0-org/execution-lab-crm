'use client'

import { useState, useEffect, useRef } from 'react'
import { listContactsAction } from '../actions/listContacts'

// Seeded with the server-rendered first load (no client fetch on mount);
// only refetches on reload — a filter change remounts this view with
// fresh server data, so there is no skeleton flash and no layout shift.
export function useContacts(filter, initialContacts) {
  const [contacts, setContacts] = useState(initialContacts)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listContactsAction(filter).then(setContacts)
  }, [tick, filter])

  return { contacts, loading: false, reload: () => setTick((n) => n + 1) }
}
