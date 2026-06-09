'use client'

import { useState, useEffect } from 'react'
import { listConflictsAction } from '../actions/listConflicts'

export function useConflicts() {
  const [conflicts, setConflicts] = useState([])
  const [tick, setTick] = useState(0)
  const reload = () => setTick((n) => n + 1)

  useEffect(() => {
    listConflictsAction().then(setConflicts)
  }, [tick])

  return { conflicts, reload }
}
