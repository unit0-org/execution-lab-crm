import { Stack } from '@/ui/layout/Stack'
import { HotLeadList } from './HotLeadList'
import { DigestSections } from './DigestSections'

// The dashboard body: hot leads plus the weekly-digest sections.
export function DigestBoard({ digest }) {
  return (
    <Stack gap="lg">
      <HotLeadList leads={digest.hotLeads} />
      <DigestSections digest={digest} />
    </Stack>
  )
}
