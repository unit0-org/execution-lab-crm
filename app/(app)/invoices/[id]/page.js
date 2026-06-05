import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { InvoiceDetailView } from './components/InvoiceDetailView'

export default function InvoicePage() {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/invoices">← Back to invoices</Link>
        <InvoiceDetailView />
      </Stack>
    </Page>
  )
}
