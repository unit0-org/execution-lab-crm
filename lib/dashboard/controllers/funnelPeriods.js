// The period filter's options. There is deliberately no "all time" entry:
// the filter bar's own "All" reset is that, and it is the default — most
// events sit months back, so opening on the current month would show a
// blank funnel on a CRM that has plenty of history.
export const FUNNEL_PERIODS = [
  { value: 'year', label: 'This year' },
  { value: 'quarter', label: 'Last 3 months' },
  { value: 'month', label: 'This month' }
]

const floors = {
  month: (now) => new Date(now.getFullYear(), now.getMonth(), 1),
  quarter: (now) => new Date(now.getFullYear(), now.getMonth() - 2, 1),
  year: (now) => new Date(now.getFullYear(), 0, 1)
}

// The date a period key filters from; null means no floor (all time).
export function periodStart(period, now = new Date()) {
  const floor = floors[period]

  if (!floor) return null

  return floor(now)
}
