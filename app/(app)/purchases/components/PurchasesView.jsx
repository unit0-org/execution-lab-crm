'use client'

import { useSearchParams } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { PURCHASE_FILTERS } from './purchaseFilters'
import { usePurchases } from '../hooks/usePurchases'
import { SyncPurchases } from './SyncPurchases'
import { PurchasesList } from './PurchasesList'

export function PurchasesView() {
  const range = useSearchParams().get('window')
  const { purchases, loading, reload } = usePurchases(range)

  return (
    <Stack gap="md">
      <SyncPurchases onSynced={reload} />
      <FilterBar options={PURCHASE_FILTERS} active={range}
        basePath="/purchases" param="window" />
      <PurchasesList loading={loading} purchases={purchases} />
    </Stack>
  )
}
