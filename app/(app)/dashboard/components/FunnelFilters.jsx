import { Stack } from '@/ui/layout/Stack'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { FUNNEL_PERIODS } from '@/lib/event/controllers/eventPeriods'

const PATH = '/dashboard'

// Period and type, both URL-driven so a filtered dashboard is a link you
// can send. Each bar keeps the other's selection via `keep`. The period
// bar lists "All" itself (`reset={false}`) because no param means the
// default period, not every period.
export function FunnelFilters({ filter, types }) {
  return (
    <Stack gap="sm">
      <FilterBar options={FUNNEL_PERIODS} active={filter.period} reset={false}
        basePath={PATH} param="period" keep={{ type: filter.type }} />
      <FilterBar options={types} active={filter.type} basePath={PATH}
        param="type" keep={{ period: filter.period }} />
    </Stack>
  )
}
