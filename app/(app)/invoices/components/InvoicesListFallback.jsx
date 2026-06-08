import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { InvoicesSkeleton } from './InvoicesSkeleton'

// Suspense fallback that reserves the header so the list never shifts.
export function InvoicesListFallback() {
  return (
    <Stack gap="md">
      <SectionHeader title="Invoices" />
      <InvoicesSkeleton />
    </Stack>
  )
}
