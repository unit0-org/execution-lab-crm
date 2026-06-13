'use client'

import { useSearchParams } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { PURCHASE_FILTERS } from './purchaseFilters'
import { usePurchases } from '../hooks/usePurchases'
import { useRefundFilter } from '../hooks/useRefundFilter'
import { SyncPurchases } from './SyncPurchases'
import { PurchasesChart } from './PurchasesChart'
import { PurchasesList } from './PurchasesList'
import { RefundFilter } from './RefundFilter'

export function PurchasesView({ initialPurchases }) {
  const range = useSearchParams().get('window')
  const { purchases, reload } = usePurchases(range, initialPurchases)
  const refund = useRefundFilter(purchases)

  return (
    <Stack gap="md">
      <SyncPurchases onSynced={reload} />
      <FilterBar options={PURCHASE_FILTERS} active={range}
        basePath="/purchases" param="window" />
      <RefundFilter showRefunded={refund.showRefunded}
        onToggle={refund.toggle} />
      <PurchasesChart window={range} />
      <PurchasesList purchases={refund.visible} />
    </Stack>
  )
}
