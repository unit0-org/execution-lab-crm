import { Page } from '@/ui/layout/Page'
import { Heading } from '@/ui/atoms/Heading'
import { Stack } from '@/ui/layout/Stack'
import { ParticipantsServer } from './ParticipantsServer'

export const dynamic = 'force-dynamic'

export default function ParticipantsPage({ searchParams }) {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Participants</Heading>
        <ParticipantsServer searchParams={searchParams} />
      </Stack>
    </Page>
  )
}
