'use client'

import { useState, useEffect, useRef } from 'react'
import { listCohortResourcesAction } from '../actions/listCohortResources'

// Seeded with server-loaded resources; refetches only on reload.
export function useCohortResources(cohortId, initial) {
  const [resources, setResources] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listCohortResourcesAction(cohortId).then(setResources)
  }, [cohortId, tick])

  return { resources, reload: () => setTick((n) => n + 1) }
}
