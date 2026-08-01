import { Stack } from '@/ui/layout/Stack'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { FUNNEL_PERIODS } from '@/lib/dashboard/controllers/funnelPeriods'

const PATH = '/dashboard'

// Period and type, both URL-driven so a filtered dashboard is a link you
// can send. Each bar keeps the other's selection via `keep`.
export function FunnelFilters({ filter, types }) {
  return (
    <Stack gap="sm">
      <FilterBar options={FUNNEL_PERIODS} active={filter.period}
        basePath={PATH} param="period" keep={{ type: filter.type }} />
      <FilterBar options={types} active={filter.type} basePath={PATH}
        param="type" keep={{ period: filter.period }} />
    </Stack>
  )
}
