'use client'

import { Stack } from '@/ui/layout/Stack'
import { usePurchases } from '../hooks/usePurchases'
import { SyncPurchases } from './SyncPurchases'
import { PurchasesList } from './PurchasesList'

export function PurchasesView() {
  const { purchases, loading, reload } = usePurchases()

  return (
    <Stack gap="md">
      <SyncPurchases onSynced={reload} />
      <PurchasesList loading={loading} purchases={purchases} />
    </Stack>
  )
}
