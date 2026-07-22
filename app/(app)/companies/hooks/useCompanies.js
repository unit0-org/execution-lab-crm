'use client'

import { useState, useEffect, useRef } from 'react'
import { listCompaniesAction } from '../actions/listCompanies'

// Seeded with the server-rendered first load; only refetches on reload.
export function useCompanies(initial) {
  const [companies, setCompanies] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listCompaniesAction().then(setCompanies)
  }, [tick])

  return { companies, reload: () => setTick((n) => n + 1) }
}
