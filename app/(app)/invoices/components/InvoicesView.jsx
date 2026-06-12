'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useInvoices } from '../hooks/useInvoices'
import { useInvoiceSelection } from '../hooks/useInvoiceSelection'
import { InvoicesToolbar } from './InvoicesToolbar'
import { InvoicesList } from './InvoicesList'

export function InvoicesView({ initialInvoices }) {
  const { invoices, reload } = useInvoices(initialInvoices)
  const selection = useInvoiceSelection(invoices)
  const router = useRouter()
  const onAdd = () => router.push('/invoices/new')

  return (
    <Stack gap="md">
      <SectionHeader title="Invoices" addLabel="New invoice" onAdd={onAdd} />
      <InvoicesToolbar invoices={invoices} selection={selection}
        onChanged={reload} />
      <InvoicesList loading={false} invoices={invoices}
        selection={selection} onChanged={reload} />
    </Stack>
  )
}
