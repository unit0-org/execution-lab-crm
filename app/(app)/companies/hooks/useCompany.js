'use client'

import { useState, useEffect, useRef } from 'react'
import { getCompanyAction } from '../actions/getCompany'

// Seeded with the server-loaded company; only refetches on refresh.
export function useCompany(id, initial) {
  const [company, setCompany] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    getCompanyAction(id).then(setCompany)
  }, [id, tick])

  return { company, refresh: () => setTick((n) => n + 1) }
}
