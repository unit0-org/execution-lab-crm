import { Page } from '@/ui/layout/Page'
import { DashboardServer } from './DashboardServer'

export const dynamic = 'force-dynamic'

export default function DashboardPage({ searchParams }) {
  return (
    <Page width="wide">
      <DashboardServer searchParams={searchParams} />
    </Page>
  )
}
