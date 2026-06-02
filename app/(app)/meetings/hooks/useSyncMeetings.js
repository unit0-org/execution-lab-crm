'use client'

import { useState } from 'react'
import { syncMeetingsAction } from '../actions/syncMeetings'

export function useSyncMeetings(onSynced) {
  const [syncing, setSyncing] = useState(false)

  const sync = () => {
    setSyncing(true)
    syncMeetingsAction()
      .then(onSynced)
      .finally(() => setSyncing(false))
  }

  return { sync, syncing }
}
