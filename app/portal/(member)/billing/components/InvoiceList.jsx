import { Stack } from '@/ui/layout/Stack'
import { MemberInvoiceRow } from './MemberInvoiceRow'

export function InvoiceList({ invoices }) {
  return (
    <Stack gap="sm">
      {invoices.map((invoice) => (
        <MemberInvoiceRow key={invoice.id} invoice={invoice} />
      ))}
    </Stack>
  )
}
