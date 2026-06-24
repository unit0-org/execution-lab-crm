import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { MemberSessions } from './MemberSessions'

export function MemberCohortResources({ entry }) {
  return (
    <Stack gap="sm">
      <Heading level={3}>{entry.cohort.label}</Heading>
      <MemberSessions sessions={entry.sessions} />
    </Stack>
  )
}
