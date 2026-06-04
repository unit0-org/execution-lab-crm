import { Stack } from '@/ui/layout/Stack'
import { DashboardStats } from './DashboardStats'
import { HotLeadList } from './HotLeadList'
import { LeadSegments } from './LeadSegments'

// The loaded dashboard: headline stats, hot leads, then lead segments.
export function DashboardBody({ stats, hotLeads, segments }) {
  return (
    <Stack gap="lg">
      <DashboardStats stats={stats} />
      <HotLeadList leads={hotLeads} />
      <LeadSegments segments={segments} />
    </Stack>
  )
}
