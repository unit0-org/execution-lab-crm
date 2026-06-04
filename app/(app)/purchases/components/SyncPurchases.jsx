'use client'

import { SyncControl } from '@/ui/molecules/SyncControl'
import { timeAgo } from '@/ui/atoms/timeAgo'
import { usePurchaseSync } from '../hooks/usePurchaseSync'

export function SyncPurchases({ onSynced }) {
  const { lastSyncedAt, syncing, force } = usePurchaseSync(onSynced)
  const label = syncing
    ? 'Syncing…'
    : `Last synced ${timeAgo(lastSyncedAt)}`

  return (
    <SyncControl label={label} syncing={syncing} onSync={force} />
  )
}
