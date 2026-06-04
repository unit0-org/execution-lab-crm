import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { LeadRows } from './LeadRows'

// Leads ranked by heat score, highest first.
export function HotLeadList({ leads }) {
  return (
    <Stack gap="sm">
      <Heading level={2} gutter="none">Hot leads</Heading>
      <LeadRows leads={leads} />
    </Stack>
  )
}
