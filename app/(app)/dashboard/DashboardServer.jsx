import { dashboardSummaryAction } from './actions/dashboardSummary'
import { DashboardBody } from './components/DashboardBody'

export async function DashboardServer() {
  const data = await dashboardSummaryAction()

  return (
    <DashboardBody
      stats={data.stats}
      hotLeads={data.hotLeads}
      segments={data.segments}
    />
  )
}
