'use client'

import { SyncControl } from '@/ui/molecules/SyncControl'
import { timeAgo } from '@/ui/atoms/timeAgo'

export function SyncStatus({ lastSyncedAt, syncing, onForce }) {
  const label = syncing
    ? 'Syncing…'
    : `Last synced ${timeAgo(lastSyncedAt)}`

  return (
    <SyncControl label={label} syncing={syncing} onSync={onForce} />
  )
}
