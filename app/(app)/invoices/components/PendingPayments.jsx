'use client'

import { CardGrid } from '@/ui/layout/CardGrid'
import { Stat } from '@/ui/molecules/Stat'
import { summarizePendingPayments } from '../hooks/summarizePendingPayments'

// What the business is still owed, above the list. Hidden entirely when
// nothing is outstanding — an empty "0.00 CAD" tile is noise. The tile
// links to the Unpaid chip, so you can see the invoices behind the sum.
export function PendingPayments({ invoices }) {
  const pending = summarizePendingPayments(invoices)

  if (!pending.count) return null

  return (
    <CardGrid min={220}>
      <Stat tone="warm" value={pending.total}
        label={`Pending payments (${pending.count})`}
        href="/invoices?status=unpaid" />
    </CardGrid>
  )
}
