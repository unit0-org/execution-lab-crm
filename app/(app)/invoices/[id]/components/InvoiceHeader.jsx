import { PageHeader } from '@/ui/organisms/PageHeader'
import { InvoiceTitle } from './InvoiceTitle'
import { InvoiceLinks } from './InvoiceLinks'

// Title + status on the left, Edit / Download page actions on the right.
export function InvoiceHeader({ invoice }) {
  return (
    <PageHeader title={<InvoiceTitle invoice={invoice} />}
      actions={<InvoiceLinks id={invoice.id} />} />
  )
}
