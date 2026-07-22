export const companyInvoiceColumns = [
  { label: 'Number', key: 'number', sortBy: (i) => i.number || '' },
  { label: 'Total', key: 'total' },
  { label: 'Status', key: 'status', sortBy: (i) => i.status || '' },
  { label: 'Date', key: 'date', sortBy: (i) => i.date || '' }
]
