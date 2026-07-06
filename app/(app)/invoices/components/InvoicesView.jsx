'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useInvoices } from '../hooks/useInvoices'
import { useRowSelection } from '@/ui/molecules/useRowSelection'
import { InvoicesToolbar } from './InvoicesToolbar'
import { InvoicesList } from './InvoicesList'

export function InvoicesView({ initialInvoices }) {
  const { invoices, reload } = useInvoices(initialInvoices)
  const selection = useRowSelection(invoices)
  const router = useRouter()
  const onAdd = () => router.push('/invoices/new')

  return (
    <Stack gap="md">
      <SectionHeader title="Invoices" addLabel="New invoice" onAdd={onAdd} />
      <InvoicesToolbar invoices={invoices} selection={selection}
        onChanged={reload} />
      <InvoicesList invoices={invoices}
        selection={selection} onChanged={reload} />
    </Stack>
  )
}
