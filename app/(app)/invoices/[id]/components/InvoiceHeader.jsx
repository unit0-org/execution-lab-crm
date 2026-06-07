import { GrowRow } from '@/ui/layout/GrowRow'
import { InvoiceTitle } from './InvoiceTitle'
import { InvoiceLinks } from './InvoiceLinks'

// Title + status on the left, Edit / Download buttons on the right.
export function InvoiceHeader({ invoice }) {
  return (
    <GrowRow align="start">
      <InvoiceTitle invoice={invoice} />
      <InvoiceLinks id={invoice.id} />
    </GrowRow>
  )
}
