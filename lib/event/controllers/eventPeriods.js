// The period filter, shared by the events list and the dashboard funnel.
export const EVENT_PERIODS = [
  { value: 'year', label: 'This year' },
  { value: 'quarter', label: 'Last 3 months' },
  { value: 'month', label: 'This month' }
]

// The funnel adds an explicit "All", because there no param means the
// default below rather than every period — so the bar can't use its own
// built-in reset. The events list keeps that reset (no param = truly
// everything, upcoming events included) and uses EVENT_PERIODS as is.
export const FUNNEL_PERIODS = [{ value: 'all', label: 'All' }, ...EVENT_PERIODS]

// What the dashboard opens on: recent enough to be about what we're doing
// now, wide enough that a quiet month doesn't show an empty funnel.
export const DEFAULT_PERIOD = 'quarter'

const floors = {
  month: (now) => new Date(now.getFullYear(), now.getMonth(), 1),
  quarter: (now) => new Date(now.getFullYear(), now.getMonth() - 2, 1),
  year: (now) => new Date(now.getFullYear(), 0, 1)
}

// The date a period key filters from; null means no floor ("all").
export function periodStart(period, now = new Date()) {
  const floor = floors[period]

  if (!floor) return null

  return floor(now)
}
