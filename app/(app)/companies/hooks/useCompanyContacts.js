'use client'

import { useState, useEffect, useRef } from 'react'
import { companyContactsAction } from '../actions/companyContacts'

// Seeded with the server-loaded links; only refetches on reload.
export function useCompanyContacts(companyId, initial) {
  const [contacts, setContacts] = useState(initial)
  const [n, setN] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    companyContactsAction(companyId).then(setContacts)
  }, [companyId, n])

  return { contacts, reload: () => setN((x) => x + 1) }
}
