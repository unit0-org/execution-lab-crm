'use client'

import { InvoicesTable } from './InvoicesTable'
import { InvoicesSkeleton } from './InvoicesSkeleton'

export function InvoicesList({ loading, invoices, onChanged }) {
  if (loading) return <InvoicesSkeleton />

  return <InvoicesTable invoices={invoices} onChanged={onChanged} />
}
