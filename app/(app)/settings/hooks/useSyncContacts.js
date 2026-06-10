'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { syncContactsAction } from '../actions/syncContacts'
import { syncMessage } from './syncMessage'

// Force a contacts sync now: shows progress, toasts the outcome, and
// refreshes the accounts table so "Last synced" reflects the run.
export function useSyncContacts(onSynced) {
  const [syncing, setSyncing] = useState(false)

  const done = (result) => {
    showToast(syncMessage(result))
    onSynced()
  }

  const sync = () => {
    setSyncing(true)
    syncContactsAction().then(done).finally(() => setSyncing(false))
  }

  return { syncing, sync }
}
