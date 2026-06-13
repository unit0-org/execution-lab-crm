'use client'

import { InvoicesTable } from './InvoicesTable'

export function InvoicesList({ invoices, selection, onChanged }) {
  return <InvoicesTable invoices={invoices} selection={selection}
    onChanged={onChanged} />
}
