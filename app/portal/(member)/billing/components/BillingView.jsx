import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { InvoiceList } from './InvoiceList'
import { EmptyState } from '@/ui/molecules/EmptyState'

export function BillingView({ invoices }) {
  const empty = 'Invoices issued to you will appear here.'

  if (!invoices.length) return <EmptyState title="Billing" message={empty} />

  return (
    <Stack gap="lg">
      <Display size="sm">Billing</Display>
      <InvoiceList invoices={invoices} />
    </Stack>
  )
}
