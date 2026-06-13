import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { CohortsServer } from './CohortsServer'
import { WaitlistServer } from '../waitlist/WaitlistServer'

export const dynamic = 'force-dynamic'

export default function CohortsPage() {
  return (
    <Page width="wide">
      <Stack gap="lg">
        <CohortsServer />
        <WaitlistServer />
      </Stack>
    </Page>
  )
}
