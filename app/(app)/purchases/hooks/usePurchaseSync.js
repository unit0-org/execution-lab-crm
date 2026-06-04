'use client'

import { useState, useEffect } from 'react'
import { syncPurchasesAction } from '../actions/syncPurchases'

export function usePurchaseSync(onSynced) {
  const [lastSyncedAt, setLastSyncedAt] = useState(null)
  const [syncing, setSyncing] = useState(true)

  const apply = (r) => {
    setLastSyncedAt(r?.lastSyncedAt || null)

    if (r?.imported) onSynced()
  }

  const force = () => {
    setSyncing(true)
    syncPurchasesAction(true).then(apply).finally(() => setSyncing(false))
  }

  useEffect(() => {
    syncPurchasesAction(false).then(apply).finally(() => setSyncing(false))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { lastSyncedAt, syncing, force }
}
