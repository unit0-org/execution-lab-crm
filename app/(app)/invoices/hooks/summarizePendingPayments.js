import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

const addCents = (sum, row) => sum + (row.totalCents || 0)

// What's still owed across the whole list: how many invoices are unpaid
// and their total. Derived from the rows on every render, so marking one
// paid moves the total with it.
export function summarizePendingPayments(invoices) {
  const unpaid = invoices.filter((row) => row.unpaid)

  return {
    count: unpaid.length,
    total: formatMoney(unpaid.reduce(addCents, 0), 'cad')
  }
}
