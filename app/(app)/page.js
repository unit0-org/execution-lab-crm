import { Suspense } from 'react'
import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { DashboardServer } from './dashboard/DashboardServer'
import { DashboardSkeleton } from './dashboard/components/DashboardSkeleton'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  return (
    <Page width="wide">
      <Stack gap="lg">
        <Heading>Dashboard</Heading>
        <Suspense fallback={<DashboardSkeleton />}>
          <DashboardServer />
        </Suspense>
      </Stack>
    </Page>
  )
}
