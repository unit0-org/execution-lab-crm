export const columns = [
  { label: 'Number', key: 'number', sortBy: (i) => i.number || '' },
  { label: 'Client', key: 'client', sortBy: (i) => i.client || '' },
  { label: 'Total', key: 'total', sortBy: (i) => i.total || '' },
  { label: 'Status', key: 'status', sortBy: (i) => i.status || '' },
  { label: 'Date', key: 'date', sortBy: (i) => i.date },
  { label: '' }
]
