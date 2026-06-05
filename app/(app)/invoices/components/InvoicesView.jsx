'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { useInvoices } from '../hooks/useInvoices'
import { InvoicesList } from './InvoicesList'
import { CreateInvoiceModal } from './CreateInvoiceModal'

export function InvoicesView() {
  const { invoices, loading, reload } = useInvoices()
  const modal = useToggle()
  const onCreated = () => { reload(); modal.hide() }

  return (
    <Stack gap="md">
      <SectionHeader title="Invoices" addLabel="New invoice"
        onAdd={modal.show} />
      <InvoicesList loading={loading} invoices={invoices} />
      <CreateInvoiceModal open={modal.open} onClose={modal.hide}
        onCreated={onCreated} />
    </Stack>
  )
}
