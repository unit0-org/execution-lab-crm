import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { InvoiceEditServer } from './InvoiceEditServer'

export default function EditInvoicePage({ params }) {
  return (
    <Page>
      <Stack gap="md">
        <Suspense fallback={<Text>Loading…</Text>}>
          <InvoiceEditServer params={params} />
        </Suspense>
      </Stack>
    </Page>
  )
}
