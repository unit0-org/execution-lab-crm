import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { AutomationsServer } from './AutomationsServer'

export const dynamic = 'force-dynamic'

export default function AutomationsPage() {
  return (
    <Page width="wide">
      <Stack gap="lg">
        <Heading>Automation</Heading>
        <AutomationsServer />
      </Stack>
    </Page>
  )
}
