import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { InvoiceDetailServer } from './InvoiceDetailServer'

export default function InvoicePage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <InvoiceDetailServer params={params} />
      </Stack>
    </Page>
  )
}
