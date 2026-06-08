import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { PurchasesServer } from './PurchasesServer'
import { PurchasesSkeleton } from './components/PurchasesSkeleton'

export default function PurchasesPage({ searchParams }) {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Purchases</Heading>
        <Suspense fallback={<PurchasesSkeleton />}>
          <PurchasesServer searchParams={searchParams} />
        </Suspense>
      </Stack>
    </Page>
  )
}
