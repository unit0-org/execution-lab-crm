import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { MergeFixServer } from './MergeFixServer'

export default function MergeFixPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Merge &amp; fix</Heading>
        <MergeFixServer />
      </Stack>
    </Page>
  )
}
