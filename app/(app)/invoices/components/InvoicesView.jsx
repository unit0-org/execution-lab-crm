'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useInvoices } from '../hooks/useInvoices'
import { InvoicesList } from './InvoicesList'

export function InvoicesView() {
  const { invoices, loading, reload } = useInvoices()
  const router = useRouter()
  const onAdd = () => router.push('/invoices/new')

  return (
    <Stack gap="md">
      <SectionHeader title="Invoices" addLabel="New invoice"
        onAdd={onAdd} />
      <InvoicesList loading={loading} invoices={invoices}
        onChanged={reload} />
    </Stack>
  )
}
