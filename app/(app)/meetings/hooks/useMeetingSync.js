'use client'

import { useState, useEffect } from 'react'
import { syncMeetingsAction } from '../actions/syncMeetings'

export function useMeetingSync(onSynced) {
  const [lastSyncedAt, setLastSyncedAt] = useState(null)
  const [syncing, setSyncing] = useState(true)

  const apply = (r) => {
    setLastSyncedAt(r?.lastSyncedAt || null)

    if (r?.imported) onSynced()
  }

  const force = () => {
    setSyncing(true)
    syncMeetingsAction(true).then(apply).finally(() => setSyncing(false))
  }

  useEffect(() => {
    syncMeetingsAction(false).then(apply).finally(() => setSyncing(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { lastSyncedAt, syncing, force }
}
