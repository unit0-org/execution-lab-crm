'use client'

import { Stack } from '@/ui/layout/Stack'
import { InvoiceHeader } from './InvoiceHeader'
import { InvoiceActions } from './InvoiceActions'
import { InvoiceLines } from './InvoiceLines'
import { InvoiceTotals } from './InvoiceTotals'

export function InvoiceDetail({ invoice, onChanged }) {
  return (
    <Stack gap="lg">
      <InvoiceHeader invoice={invoice} />
      <InvoiceActions invoice={invoice} onChanged={onChanged} />
      <InvoiceLines invoice={invoice} />
      <InvoiceTotals invoice={invoice} />
    </Stack>
  )
}
