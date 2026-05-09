'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const POLL_MS = 1500

const fields = 'id, sync_status, sync_phase, sync_started_at, sync_completed_at, sync_error, sync_contacts_done, sync_calendar_done, sync_meet_done'

export function useSyncProgress(accountId) {
  const [row, setRow] = useState(null)

  useEffect(() => {
    if (!accountId) return
    const c = createClient()
    let stopped = false
    const tick = async () => {
      const { data } = await c.from('google_accounts').select(fields).eq('id', accountId).single()
      if (stopped) return
      setRow(data)
    }
    tick()
    const id = setInterval(tick, POLL_MS)
    return () => { stopped = true; clearInterval(id) }
  }, [accountId])

  return row
}
