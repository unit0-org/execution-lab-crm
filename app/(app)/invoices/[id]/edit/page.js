import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { InvoiceEditServer } from './InvoiceEditServer'

export default function EditInvoicePage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <InvoiceEditServer params={params} />
      </Stack>
    </Page>
  )
}
