'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { EndRow } from '@/ui/layout/EndRow'
import { Button } from '@/ui/atoms/Button'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useInvoices } from '../hooks/useInvoices'
import { useBackfillInvoices } from '../hooks/useBackfillInvoices'
import { InvoicesList } from './InvoicesList'

export function InvoicesView({ initialInvoices }) {
  const { invoices, reload } = useInvoices(initialInvoices)
  const router = useRouter()
  const backfill = useBackfillInvoices(reload)
  const onAdd = () => router.push('/invoices/new')

  return (
    <Stack gap="md">
      <SectionHeader title="Invoices" addLabel="New invoice"
        onAdd={onAdd} />
      <EndRow>
        <Button size="sm" onClick={backfill}>Generate missing invoices</Button>
      </EndRow>
      <InvoicesList loading={false} invoices={invoices}
        onChanged={reload} />
    </Stack>
  )
}
