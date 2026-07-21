'use client'

import { useState } from 'react'
import { syncMeetingsAction } from '../actions/syncMeetings'

// Sync runs in the background (cron), so the page no longer syncs on load.
// It seeds the last-sync time from the server and offers a manual refresh.
export function useMeetingSync(onSynced, initialLastSyncedAt) {
  const [lastSyncedAt, setLastSyncedAt] = useState(initialLastSyncedAt || null)
  const [syncing, setSyncing] = useState(false)

  const apply = (r) => {
    setLastSyncedAt(r?.lastSyncedAt || null)

    if (r?.imported || r?.updated) onSynced()
  }

  const force = () => {
    setSyncing(true)
    syncMeetingsAction(true).then(apply).finally(() => setSyncing(false))
  }

  return { lastSyncedAt, syncing, force }
}
