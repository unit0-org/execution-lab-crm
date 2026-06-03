'use client'

import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { SyncError } from './SyncError'
import { SyncSummary } from './SyncSummary'
import { useSyncPurchases } from '../hooks/useSyncPurchases'

export function SyncPurchases({ onSynced }) {
  const { sync, syncing, error, result } = useSyncPurchases(onSynced)
  const label = syncing ? 'Syncing…' : 'Sync from Stripe'

  return (
    <Stack gap="sm">
      <Inline>
        <Button onClick={sync} disabled={syncing}>{label}</Button>
      </Inline>
      <SyncError message={error} />
      <SyncSummary result={result} />
    </Stack>
  )
}
