'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { CompanyInvoiceList } from './CompanyInvoiceList'

// A company's activity: the invoices raised for it (read-only).
export function CompanyInvoices({ invoices }) {
  return (
    <Stack gap="sm">
      <SectionHeader title="Invoices" />
      <CompanyInvoiceList items={invoices} />
    </Stack>
  )
}
