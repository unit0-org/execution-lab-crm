'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const POLL_MS = 5000

// ISO timestamps sort lexicographically == chronologically, so the last
// element after sorting is the most recent completed sync across accounts.
const reduce = (rows) => ({
  running: rows.some((r) => r.sync_status === 'running'),
  at: rows.map((r) => r.sync_completed_at).filter(Boolean).sort().at(-1) || null,
})

export function useLastSync() {
  const [state, setState] = useState({ running: false, at: null })
  useEffect(() => {
    const c = createClient()
    let stopped = false
    const tick = async () => {
      const { data } = await c.from('google_accounts').select('sync_status, sync_completed_at')
      if (!stopped) setState(reduce(data || []))
    }
    tick()
    const id = setInterval(tick, POLL_MS)
    return () => { stopped = true; clearInterval(id) }
  }, [])
  return state
}
