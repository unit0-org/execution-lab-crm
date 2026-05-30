'use client'

import { useEffect, useRef } from 'react'
import { autoSync } from '../contacts/actions'

// Fires once per full app load. The (app) layout persists across client
// navigations, so this won't re-run on every page change; the server-side
// staleness threshold prevents redundant syncs on hard refreshes.
export function AutoSync() {
  const done = useRef(false)
  useEffect(() => {
    if (done.current) return
    done.current = true
    autoSync().catch(() => {})
  }, [])
  return null
}
