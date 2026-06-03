'use client'

import { useState } from 'react'
import { syncPurchasesAction } from '../actions/syncPurchases'

export function useSyncPurchases(onSynced) {
  const [syncing, setSyncing] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const sync = () => {
    setSyncing(true)
    setError(null)
    setResult(null)
    syncPurchasesAction()
      .then((r) => {
        if (r?.error) setError(r.error)
        else {
          setResult(r)
          onSynced()
        }
      })
      .finally(() => setSyncing(false))
  }

  return { sync, syncing, error, result }
}
