'use client'

import { useState } from 'react'
import { syncPurchasesAction } from '../actions/syncPurchases'

export function useSyncPurchases(onSynced) {
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState(null)

  const sync = () => {
    setSyncing(true)
    setError(null)
    syncPurchasesAction()
      .then((result) => {
        if (result?.error) setError(result.error)
        else onSynced()
      })
      .finally(() => setSyncing(false))
  }

  return { sync, syncing, error }
}
