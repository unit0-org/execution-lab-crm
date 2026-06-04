import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { PurchasesView } from './components/PurchasesView'

export default function PurchasesPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Purchases</Heading>
        <Suspense>
          <PurchasesView />
        </Suspense>
      </Stack>
    </Page>
  )
}
