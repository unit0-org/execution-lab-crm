'use client'

import { SyncControl } from '@/ui/molecules/SyncControl'
import { syncLabel } from './syncLabel'
import { useSyncPurchases } from '../hooks/useSyncPurchases'

export function SyncPurchases({ onSynced }) {
  const state = useSyncPurchases(onSynced)

  return (
    <SyncControl label={syncLabel(state)} syncing={state.syncing}
      onSync={state.sync} />
  )
}
