import { Page } from '@/ui/layout/Page'
import { DashboardServer } from './DashboardServer'

export const dynamic = 'force-dynamic'

export default function DashboardPage() {
  return (
    <Page width="wide">
      <DashboardServer />
    </Page>
  )
}
