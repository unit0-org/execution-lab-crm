export const columns = [
  { label: 'Product', key: 'product', sortBy: (p) => p.product || '' },
  { label: 'Buyer', key: 'buyer', sortBy: (p) => p.buyer || '' },
  { label: 'Amount', key: 'amount', sortBy: (p) => p.amount || '' },
  { label: 'Date', key: 'date', sortBy: (p) => p.date }
]
