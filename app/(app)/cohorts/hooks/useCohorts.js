'use client'

import { useState, useEffect, useRef } from 'react'
import { listCohortsAction } from '../actions/listCohorts'

// Seeded with the server-rendered first load; only refetches on reload.
export function useCohorts(initialCohorts) {
  const [cohorts, setCohorts] = useState(initialCohorts)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listCohortsAction().then(setCohorts)
  }, [tick])

  return { cohorts, reload: () => setTick((n) => n + 1) }
}
