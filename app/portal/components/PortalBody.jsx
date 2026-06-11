import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { FeaturedHero } from './FeaturedHero'
import { CohortRoster } from './CohortRoster'
import { PortalFootnote } from './PortalFootnote'
import { featuredCohort } from './featuredCohort'

// Hero (featured cohort) + roster of the rest + footnote; empty state
// when no cohort is open.
export function PortalBody({ cohorts }) {
  if (cohorts.length === 0) {
    return <Text tone="muted">No cohorts open right now.</Text>
  }

  const featured = featuredCohort(cohorts)
  const rest = cohorts.filter((card) => card.id !== featured.id)

  return (
    <Stack gap="lg">
      <FeaturedHero card={featured} />
      <CohortRoster cohorts={rest} />
      <PortalFootnote />
    </Stack>
  )
}
