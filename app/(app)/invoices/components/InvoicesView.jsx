'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { INVOICE_STATUS_FILTERS } from './invoiceStatusFilters'
import { useInvoicesView } from '../hooks/useInvoicesView'
import { PendingPayments } from './PendingPayments'
import { InvoicesToolbar } from './InvoicesToolbar'
import { InvoicesList } from './InvoicesList'

export function InvoicesView({ initialInvoices }) {
  const view = useInvoicesView(initialInvoices)
  const router = useRouter()
  const onAdd = () => router.push('/invoices/new')

  return (
    <Stack gap="md">
      <SectionHeader title="Invoices" addLabel="New invoice" onAdd={onAdd} />
      <PendingPayments invoices={view.invoices} />
      <FilterBar options={INVOICE_STATUS_FILTERS} active={view.status}
        basePath="/invoices" param="status" />
      <InvoicesToolbar invoices={view.shown} selection={view.selection}
        onChanged={view.reload} />
      <InvoicesList invoices={view.shown} selection={view.selection}
        onChanged={view.reload} />
    </Stack>
  )
}
