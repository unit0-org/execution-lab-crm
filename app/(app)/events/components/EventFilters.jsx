import { Stack } from '@/ui/layout/Stack'
import { FilterBar } from '@/ui/molecules/FilterBar'
import { EVENT_PERIODS } from '@/lib/event/controllers/eventPeriods'

const PATH = '/events'

// Period and type, both URL-driven so a filtered list is a link you can
// send — and so the dashboard's Events tile can link straight to the set
// it counted. Each bar keeps the other's selection via `keep`. The period
// bar keeps its built-in "All" reset: here no param means every event,
// upcoming ones included.
export function EventFilters({ filter, types }) {
  return (
    <Stack gap="sm">
      <FilterBar options={EVENT_PERIODS} active={filter.period}
        basePath={PATH} param="period" keep={{ type: filter.type }} />
      <FilterBar options={types} active={filter.type} basePath={PATH}
        param="type" keep={{ period: filter.period }} />
    </Stack>
  )
}
