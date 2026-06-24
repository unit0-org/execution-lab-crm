import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { MemberCohortResources } from './MemberCohortResources'
import { ResourcesEmpty } from './ResourcesEmpty'

export function ResourcesView({ cohorts }) {
  if (!cohorts.length) return <ResourcesEmpty />

  return (
    <Stack gap="lg">
      <Display size="sm">Resources</Display>
      {cohorts.map((entry) => (
        <MemberCohortResources key={entry.cohort.id} entry={entry} />
      ))}
    </Stack>
  )
}
