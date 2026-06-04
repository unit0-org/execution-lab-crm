import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { DashboardView } from './dashboard/components/DashboardView'

export default function DashboardPage() {
  return (
    <Page width="wide">
      <Stack gap="lg">
        <Heading>Dashboard</Heading>
        <DashboardView />
      </Stack>
    </Page>
  )
}
