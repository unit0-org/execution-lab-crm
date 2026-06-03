'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { useSyncPurchases } from '../hooks/useSyncPurchases'

export function SyncPurchases({ onSynced }) {
  const { sync, syncing } = useSyncPurchases(onSynced)
  const label = syncing ? 'Syncing…' : 'Sync from Stripe'

  return (
    <Inline>
      <Button onClick={sync} disabled={syncing}>{label}</Button>
    </Inline>
  )
}
