import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { DashboardServer } from './DashboardServer'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  return (
    <Page width="wide">
      <Stack gap="lg">
        <Heading>Dashboard</Heading>
        <DashboardServer />
      </Stack>
    </Page>
  )
}
