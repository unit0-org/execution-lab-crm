import { Stack } from '@/ui/layout/Stack'
import { Card } from '@/ui/atoms/Card'
import { HotLeadList } from './HotLeadList'
import { DigestSections } from './DigestSections'

// The dashboard body: hot leads on top, then the digest sections laid out
// as a responsive grid of cards so more fits above the fold.
export function DigestBoard({ digest }) {
  return (
    <Stack gap="lg">
      <Card>
        <HotLeadList leads={digest.hotLeads} />
      </Card>
      <DigestSections digest={digest} />
    </Stack>
  )
}
