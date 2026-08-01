import { Stack } from '@/ui/layout/Stack'
import { getEventFunnelAction } from './actions/getEventFunnel'
import { listFunnelTypesAction } from './actions/listFunnelTypes'
import { FunnelHeader } from './components/FunnelHeader'
import { FunnelKpis } from './components/FunnelKpis'
import { FunnelPanel } from './components/FunnelPanel'
import { BestEventsCard } from './components/BestEventsCard'

// The dashboard: how the events we host turn strangers into clients.
export async function DashboardServer({ searchParams }) {
  const { period, type } = await searchParams
  const filter = { period: period || null, type: type || null }
  const [funnel, types] = await Promise.all([
    getEventFunnelAction(filter), listFunnelTypesAction()
  ])

  return (
    <Stack gap="lg">
      <FunnelHeader filter={filter} types={types} />
      <FunnelKpis funnel={funnel} />
      <FunnelPanel funnel={funnel} />
      <BestEventsCard events={funnel.best} />
    </Stack>
  )
}
