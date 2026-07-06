import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { MemberCohortResources } from './MemberCohortResources'
import { EmptyState } from '@/ui/molecules/EmptyState'

export function ResourcesView({ cohorts }) {
  const empty = 'Your cohort’s resources and recordings will appear here.'

  if (!cohorts.length) return <EmptyState title="Resources" message={empty} />

  return (
    <Stack gap="lg">
      <Display size="sm">Resources</Display>
      {cohorts.map((entry) => (
        <MemberCohortResources key={entry.cohort.id} entry={entry} />
      ))}
    </Stack>
  )
}
