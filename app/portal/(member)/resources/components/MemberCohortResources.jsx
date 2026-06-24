import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { MemberFolders } from './MemberFolders'

export function MemberCohortResources({ entry }) {
  return (
    <Stack gap="sm">
      <Heading level={3}>{entry.cohort.label}</Heading>
      <MemberFolders folders={entry.folders} />
    </Stack>
  )
}
