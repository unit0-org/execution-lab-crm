export const columns = [
  { label: 'Cohort', key: 'label', sortBy: (c) => c.label || '' },
  { label: 'Start', key: 'start', sortBy: (c) => c.start_date },
  { label: 'Status', key: 'status', sortBy: (c) => c.status || '' },
  { label: 'Spots', key: 'spots', sortBy: (c) => c.filled || 0 },
  { label: 'Revenue', key: 'revenue', sortBy: (c) => c.revenue || 0 },
  { label: '' }
]
