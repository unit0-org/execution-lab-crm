import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { InvoicesView } from './components/InvoicesView'

export default function InvoicesPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Invoices</Heading>
        <Suspense>
          <InvoicesView />
        </Suspense>
      </Stack>
    </Page>
  )
}
