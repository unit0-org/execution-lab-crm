import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { InvoiceDetailServer } from './InvoiceDetailServer'

export default function InvoicePage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <Suspense fallback={<Text>Loading…</Text>}>
          <InvoiceDetailServer params={params} />
        </Suspense>
      </Stack>
    </Page>
  )
}
