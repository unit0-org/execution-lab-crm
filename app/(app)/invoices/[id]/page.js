import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Link } from '@/ui/atoms/Link'
import { Text } from '@/ui/atoms/Text'
import { InvoiceDetailServer } from './InvoiceDetailServer'

export default function InvoicePage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <Link href="/invoices">← Back to invoices</Link>
        <Suspense fallback={<Text>Loading…</Text>}>
          <InvoiceDetailServer params={params} />
        </Suspense>
      </Stack>
    </Page>
  )
}
