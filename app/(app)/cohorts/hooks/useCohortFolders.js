'use client'

import { useState, useEffect, useRef } from 'react'
import { listCohortFoldersAction } from '../actions/listCohortFolders'

// Seeded with server-loaded folders; refetches only on reload.
export function useCohortFolders(cohortId, initial) {
  const [folders, setFolders] = useState(initial)
  const [tick, setTick] = useState(0)
  const hydrated = useRef(false)

  useEffect(() => {
    if (!hydrated.current) {
      hydrated.current = true

      return
    }

    listCohortFoldersAction(cohortId).then(setFolders)
  }, [cohortId, tick])

  return { folders, reload: () => setTick((n) => n + 1) }
}
