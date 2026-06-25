import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { InvoiceList } from './InvoiceList'
import { BillingEmpty } from './BillingEmpty'

export function BillingView({ invoices }) {
  if (!invoices.length) return <BillingEmpty />

  return (
    <Stack gap="lg">
      <Display size="sm">Billing</Display>
      <InvoiceList invoices={invoices} />
    </Stack>
  )
}
