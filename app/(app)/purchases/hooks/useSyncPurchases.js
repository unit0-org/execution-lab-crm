'use client'

import { useState } from 'react'
import { syncPurchasesAction } from '../actions/syncPurchases'

export function useSyncPurchases(onSynced) {
  const [syncing, setSyncing] = useState(false)

  const sync = () => {
    setSyncing(true)
    syncPurchasesAction().then(onSynced).finally(() => setSyncing(false))
  }

  return { sync, syncing }
}
