'use client'

import { useState, useEffect, useRef } from 'react'
import { listContactsAction } from '../actions/listContacts'
import { criteriaKey } from '../components/contactsCriteria'

// Seeded with the server-rendered first load (no client fetch on mount);
// only refetches on reload — a criteria change remounts this view with
// fresh server data, so there is no skeleton flash and no layout shift.
export function useContacts(criteria, initialContacts) {
  const [contacts, setContacts] = useState(initialContacts)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)
  const key = criteriaKey(criteria)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listContactsAction(JSON.parse(key)).then(setContacts)
  }, [tick, key])

  return { contacts, loading: false, reload: () => setTick((n) => n + 1) }
}
